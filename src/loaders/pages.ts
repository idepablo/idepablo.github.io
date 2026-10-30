// Content loader for one-file-per-entry folders where the body can be HTML or Markdown.
//   name.html  ->  frontmatter (--- yaml ---) + raw HTML body, rendered exactly as written
//   name.md    ->  frontmatter + Markdown body, rendered through Astro's markdown pipeline
// Keeping the case studies as HTML avoids the Markdown pass changing quotes inside SQL and code.
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';
import type { Loader } from 'astro/loaders';

function splitFrontmatter(src: string): { data: Record<string, unknown>; body: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(src);
  if (!m) return { data: {}, body: src };
  return { data: (parseYaml(m[1]) as Record<string, unknown>) ?? {}, body: src.slice(m[0].length) };
}

export function pages(options: { base: string }): Loader {
  return {
    name: 'pages-loader',
    async load({ store, config, parseData, generateDigest, renderMarkdown, logger }) {
      const dir = fileURLToPath(new URL(options.base, config.root));
      const files = (await readdir(dir)).filter((f) => /\.(html|md)$/i.test(f)).sort();
      store.clear();
      for (const file of files) {
        const abs = path.join(dir, file);
        const src = await readFile(abs, 'utf8');
        const { data: raw, body } = splitFrontmatter(src);
        const id = file.replace(/\.(html|md)$/i, '');
        const filePath = path.posix.relative(fileURLToPath(config.root), abs).split(path.sep).join('/');
        const data = await parseData({ id, data: raw, filePath });
        const rendered = file.endsWith('.md') ? await renderMarkdown(body) : { html: body };
        store.set({ id, data, body, filePath, digest: generateDigest(src), rendered });
      }
      logger.info(`Loaded ${files.length} entries from ${options.base}`);
    },
  };
}

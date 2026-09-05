import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const basePath = process.argv[2];
const root = 'dist/client';
const textExtensions = new Set(['.html', '.js', '.css', '.json', '.xml', '.txt']);

if (!basePath?.startsWith('/')) {
  throw new Error('Expected a GitHub Pages base path such as /workcore');
}

async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewrite(path);
    } else if (textExtensions.has(extname(entry.name))) {
      const source = await readFile(path, 'utf8');
      const updated = source.replaceAll('/_next/', `${basePath}/_next/`);
      if (updated !== source) await writeFile(path, updated);
    }
  }
}

await rewrite(root);

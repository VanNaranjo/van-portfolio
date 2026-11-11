// Builds the van-portfolio-ds kit:
//  - dist/index.js     ESM bundle of src/ (react external)
//  - dist/*.d.ts       declarations via tsc
//  - dist/style.css    the site's own ../../style.scss compiled with the
//                      repo's sass, prefixed with the same remote fonts /
//                      icon / animation stylesheets the HTML pages <link>.
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '..', '..');
const dist = join(here, 'dist');
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

await build({
  entryPoints: [join(here, 'src/index.ts')],
  outfile: join(dist, 'index.js'),
  bundle: true, format: 'esm', jsx: 'automatic', platform: 'browser',
  external: ['react', 'react/jsx-runtime', 'react-dom'],
});

execFileSync(process.execPath, [join(here, 'node_modules/typescript/bin/tsc'), '-p', join(here, 'tsconfig.json')], { stdio: 'inherit' });

// The repo's own sass (root node_modules), same as `npm run compile`.
const sass = await import(pathToFileURL(join(repo, 'node_modules/sass/sass.node.mjs')).href);
const css = sass.compile(join(repo, 'style.scss'), { style: 'expanded' }).css;
const remote = [
  'https://fonts.googleapis.com/css2?family=Holtwood+One+SC&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sanchez:ital@0;1&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
];
writeFileSync(join(dist, 'style.css'),
  remote.map((u) => `@import url("${u}");`).join('\n') + '\n\n/* compiled from van-portfolio/style.scss */\n' + css + '\n');
console.log('built dist/ (index.js, *.d.ts, style.css)');

import fs from 'fs';
import path from 'path';
import ts from 'rollup-plugin-typescript2';

// Every component folder with an index.ts becomes its own entry point,
// so new components are picked up without editing this file.
const componentEntries = ['atoms', 'molecules'].flatMap(type =>
  fs
    .readdirSync(path.join('src', type))
    .map(name => path.join('src', type, name, 'index.ts'))
    .filter(entry => fs.existsSync(entry))
);

export default {
  input: ['src/index.ts', ...componentEntries],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [
    ts({
      tsconfigOverride: {
        exclude: [
          '../src/**/*.mdx',
          '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
          '../src/**/*.test.@(ts|tsx)',
        ],
      },
    }),
  ],
  external: [/^react($|\/)/, /^react-icons($|\/)/, /^@ds\.ui\/foundation($|\/)/],
};

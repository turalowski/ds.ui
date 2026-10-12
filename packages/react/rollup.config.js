import ts from 'rollup-plugin-typescript2';

export default {
  input: [
    'src/index.ts',
    'src/atoms/Margin/index.ts',
    'src/atoms/Button/index.ts',
    'src/atoms/Input/index.ts',
    'src/atoms/Typography/index.ts',
    'src/molecules/Accordion/index.ts'
  ],
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
        ],
      },
    }),
  ],
  external: ['react', '@ds.ui/foundation'],
};

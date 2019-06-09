import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    output: [
      {
        exports: 'named',
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    external: [
      'react',
    ],
  },
];

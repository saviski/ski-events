import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
    },
    plugins: [
      typescript()
    ],
    external: Object.keys(pkg.dependencies)
      .filter(dependency => dependency.startsWith(/@ski/))
      .map(dependency => dependency.replace(/@ski\/(\w+)/, '@ski/$1/$1.js'))
  }
]


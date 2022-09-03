import { defineConfig } from 'tsup';
import { dependencies, peerDependencies } from './package.json';

export default defineConfig(options => ({
  entry: ['src/index.tsx'],
  outDir: 'dist',
  sourcemap: false,
  clean: true,
  dts: !options.watch,
  format: options.watch ? 'esm' : ['esm', 'cjs'],
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  minify: !options.watch,
}));

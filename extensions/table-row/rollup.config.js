import { createRollupConfig } from "../../build/create-rollup-config.js";
import pkg from "./package.json";

const rollupConfig = createRollupConfig({
  external: [/@tiptap\/pm\/.*/],
  input: "src/index.ts",
  output: [
    {
      name: pkg.name,
      file: pkg.umd,
      format: "umd",
      sourcemap: true,
    },
    {
      name: pkg.name,
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "auto",
    },
    {
      name: pkg.name,
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
});

export default rollupConfig;

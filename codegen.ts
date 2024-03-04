import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/rust-graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

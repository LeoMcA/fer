import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  environments: {
    client: {
      output: {
        manifest: true,
        target: "web",
        emitCss: true,
        distPath: {
          root: "dist/client",
        },
        assetPrefix: "/client/",
      },
      dev: {
        assetPrefix: "/client/",
      },
      source: {
        tsconfigPath: "./legacy/tsconfig.json",
        entry: {
          index: "./entry.client.js",
          legacy: "./legacy/index.tsx",
        },
      },
    },
    ssr: {
      output: {
        manifest: true,
        target: "node",
        emitCss: true,
        distPath: {
          root: "dist/ssr",
        },
        assetPrefix: "/ssr/",
      },
      dev: {
        assetPrefix: "/ssr/",
      },
      source: {
        entry: {
          index: "./entry.ssr.js",
        },
      },
    },
  },
  tools: {
    htmlPlugin: false,
  },
  performance: {
    chunkSplit: {
      strategy: "split-by-module",
    },
  },
});

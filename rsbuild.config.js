import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  environments: {
    web: {
      output: {
        manifest: true,
        target: "web",
        distPath: {
          root: "dist/client",
        },
      },
      source: {
        entry: {
          index: "./entry.client.js",
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
  output: {
    cssModules: {
      mode: "global",
    },
  },
});

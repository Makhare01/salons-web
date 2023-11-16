import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import svgr from "vite-plugin-svgr";
import pluginTsconfigPaths from "vite-tsconfig-paths";
import { parseEnvOrThrow } from "./src/env-schema";
import pluginEslint from "@nabla/vite-plugin-eslint";

const ensureEnvVariablesValid = (mode: string) => {
  const appEnv = loadEnv(mode, process.cwd());
  const env = parseEnvOrThrow(appEnv);
  console.log("Environment variables", env);
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  ensureEnvVariablesValid(mode);

  return {
    plugins: [
      react(),
      pluginTsconfigPaths(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
      pluginEslint(),
    ],
    server: {
      open: true,
      port: 3000,
    },
    build: {
      outDir: "build",
    },
  };
});

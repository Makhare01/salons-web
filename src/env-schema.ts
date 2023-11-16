import { parseEnv, z } from "znv";

export const parseEnvOrThrow = (rawEnv: Record<string, string | undefined>) =>
  parseEnv(rawEnv, {
    VITE_STAGE: z.enum(["development", "production"]),
    VITE_DEBUG_I18N: z.enum(["on", "off"]),
    VITE_APPLICATION_NAME: z.string(),
    VITE_APPLICATION_VERSION: z.string(),
    VITE_API_KEY: z.string(),
    VITE_MSW: z.enum(["on", "off"]),
  });

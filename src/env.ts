import { parseEnvOrThrow } from "./env-schema";

export const env = parseEnvOrThrow(import.meta.env);

export type Env = typeof env;

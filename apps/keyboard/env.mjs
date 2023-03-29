import { z } from "zod";

const server = z.object({
  SUPERBASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === "production"
      ? z.string().min(1)
      : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    str => process.env.VERCEL_URL ?? str,
    process.env.VERCEL ? z.string().min(1) : z.string().url(),
  ),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  DISCORD_ID: z.string(),
  DISCORD_SECRET: z.string(),
  KAKAO_ID: z.string(),
  KAKAO_SECRET: z.string(),
  REDIS_URL: z.string(),
  UPSTASH_REDIS_REST_URL: z.string(),
  UPSTASH_REDIS_REST_TOKEN: z.string(),
  EMAIL_FROM: z.string(),
  EMAIL_SERVER: z.string(),
  VERCEL_URL: z.string(),
});

const client = z.object({
  NEXT_PUBLIC_PUSHER_ID: z.string(),
  NEXT_PUBLIC_PUSHER_APP_ID: z.string(),
  NEXT_PUBLIC_PUSHER_SECRET: z.string(),
});

const processEnv = {
  SUPERBASE_URL: process.env.SUPERBASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  GITHUB_ID: process.env.GITHUB_ID,
  GITHUB_SECRET: process.env.GITHUB_SECRET,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_SERVER: process.env.EMAIL_SERVER,
  DISCORD_ID: process.env.DISCORD_ID,
  DISCORD_SECRET: process.env.DISCORD_SECRET,
  KAKAO_ID: process.env.KAKAO_ID,
  KAKAO_SECRET: process.env.KAKAO_SECRET,
  REDIS_URL: process.env.REDIS_URL,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  VERCEL_URL: process.env.VERCEL_URL,
  NEXT_PUBLIC_PUSHER_ID: process.env.NEXT_PUBLIC_PUSHER_ID,
  NEXT_PUBLIC_PUSHER_APP_ID: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  NEXT_PUBLIC_PUSHER_SECRET: process.env.NEXT_PUBLIC_PUSHER_SECRET,
};

// Don't touch the part below
// --------------------------

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env);

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === "undefined";

  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer
      ? merged.safeParse(processEnv) // on server we can validate all env vars
      : client.safeParse(processEnv) // on client we can only validate the ones that are exposed
  );

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid environment variables");
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;
      // Throw a descriptive error if a server-side env var is accessed on the client
      // Otherwise it would just be returning `undefined` and be annoying to debug
      if (!isServer && !prop.startsWith("NEXT_PUBLIC_"))
        throw new Error(
          process.env.NODE_ENV === "production"
            ? "❌ Attempted to access a server-side environment variable on the client"
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`,
        );
      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };

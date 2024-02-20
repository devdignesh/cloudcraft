import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: { 
    NEXT_PUBLIC_MAPPLS_MAP_API: z.string().min(1),
  },
  runtimeEnv: { 
    NEXT_PUBLIC_MAPPLS_MAP_API: process.env.NEXT_PUBLIC_MAPPLS_MAP_API,
  },
});

import z from "zod";

const envSchema = z.object({
  PORT: z.preprocess((a) => parseInt(a as string), z.number()).default(3333),
});

const env = envSchema.parse(process.env);

export default env;

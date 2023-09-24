import { z } from "zod";

/* GET : /posts */
const getPostsSchema = z.object({}).strict();

type TGetPostsSchema = z.infer<typeof getPostsSchema>;

/* GET : /posts/:id */
const getPostByIdSchema = z
  .object({
    id: z.union([z.string().transform((val) => parseInt(val)), z.number()]),
  })
  .strict();

type TGetPostByIdSchema = z.infer<typeof getPostByIdSchema>;

export {
  getPostsSchema,
  TGetPostsSchema,
  getPostByIdSchema,
  TGetPostByIdSchema,
};


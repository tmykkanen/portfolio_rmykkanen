import { z } from "astro/zod";
import { defineAction } from "astro:actions";

const SubscribeSchema = z.object({
  name: z.preprocess(
    (value) => (value === null ? "" : value),
    z.string().trim().min(2, "Name must be at least 2 characters."),
  ),
  email: z.preprocess(
    (value) => (value === null ? "" : value),
    z.string().trim().email("Please enter a valid email address."),
  ),
});

export const server = {
  hello: defineAction({
    handler: () => {
      console.log("hello!");
    },
  }),
  subscribe: defineAction({
    accept: "form",
    input: SubscribeSchema,
    handler: async (input) => {
      return {
        message: `Thank you, ${input.name} for subscribing!`,
      };
    },
  }),
  subscribeClient: defineAction({
    accept: "form",
    input: SubscribeSchema,
    handler: async (input) => {
      return {
        message: `Thank you, ${input.name} for subscribing!`,
      };
    },
  }),
};

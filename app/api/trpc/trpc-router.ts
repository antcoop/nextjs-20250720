import { initTRPC } from "@trpc/server";
import superjson from "superjson";

// interface JokeType {
//   id: string;
//   joke: string;
// }

// const joke: JokeType = {
//   id: "askcnjiu4",
//   joke: "What came first, the chicken or the egg? Chicken, C comes before E.",
// };

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  joke: t.procedure.query(async (/* { ctx } */) => {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
      next: {
        revalidate: 10
      }
    });
    return await response.json();
  }),
});

export type AppRouter = typeof appRouter;

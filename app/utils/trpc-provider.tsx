"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, getFetch, loggerLink } from "@trpc/client";
import { trpc } from "./trpc";

const queryClient = 
    new QueryClient({
      defaultOptions: { queries: { staleTime: 5000 } },
    });

const url = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}`
  : "http://localhost:3004/api/trpc/";

const trpcClient = 
  trpc.createClient({
    links: [
      loggerLink({
        enabled: () => true,
      }),
      // @ts-expect-error - This is a workaround for the type error in the loggerLink
      httpBatchLink({
        url,
        fetch: async (input, init?) => {
          const fetch = getFetch();
          return fetch(input, {
            ...init,
            credentials: "include",
          });
        },
      }),
    ],
  })

export function TrpcProvider(
  { children }: { children: React.ReactNode}
) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function JokeDetail(props: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      {props.children}
    </QueryClientProvider>
  );
}

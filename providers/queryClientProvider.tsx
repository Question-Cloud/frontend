"use client";

import { QueryClient, QueryClientProvider as ReactQuery } from "@tanstack/react-query";

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return <ReactQuery client={queryClient}>{children}</ReactQuery>;
};

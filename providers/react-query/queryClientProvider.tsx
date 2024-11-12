"use client";

import { QueryClient, QueryClientProvider as ReactQuery } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 1,
    },
  },
});

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReactQuery client={queryClient}>{children}</ReactQuery>;
};

export { queryClient, QueryClientProvider };

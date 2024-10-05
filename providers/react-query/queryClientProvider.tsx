"use client";

import { QueryClient, QueryClientProvider as ReactQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQuery client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </ReactQuery>
  );
};

export { queryClient, QueryClientProvider };

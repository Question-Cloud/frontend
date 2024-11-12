"use client";

import React from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Button } from "@/shared";
import { ReactNode } from "react";

interface ErrorBoundaryWrapperProps {
  children: ReactNode;
  fallbackUI?: React.FC<FallbackProps>;
}

const DefaultFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <div className="heading2 text-center whitespace-pre-line">{error.message}</div>
      <div className="h-[24px]" />
      <Button variant="navy" size="large" className="w-[220px]" onClick={() => resetErrorBoundary()}>
        재시도
      </Button>
    </div>
  );
};

const ErrorBoundaryWrapper = ({ children, fallbackUI }: ErrorBoundaryWrapperProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={fallbackUI ? fallbackUI : DefaultFallback}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export { ErrorBoundaryWrapper };

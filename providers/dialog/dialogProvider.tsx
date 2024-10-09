"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface DialogContextProps {
  isDialogOpen: boolean;
  dialogOpen: () => void;
  dialogClose: () => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext는 DialogProvider 내부에서 사용되어야 합니다.");
  }
  return context;
};

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogOpen = useCallback(() => setIsDialogOpen(true), []);
  const dialogClose = useCallback(() => setIsDialogOpen(false), []);

  return <DialogContext.Provider value={{ isDialogOpen, dialogOpen, dialogClose }}>{children}</DialogContext.Provider>;
};

export { useDialogContext, DialogProvider };

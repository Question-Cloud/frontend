"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface DialogContextProps {
  isDialogOpen: (id: string) => boolean;
  dialogOpen: (id: string) => void;
  dialogClose: (id: string) => void;
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
  const [openDialogs, setOpenDialogs] = useState<{ [key: string]: boolean }>({});

  const dialogOpen = useCallback((id: string) => setOpenDialogs((prev) => ({ ...prev, [id]: true })), []);
  const dialogClose = useCallback((id: string) => setOpenDialogs((prev) => ({ ...prev, [id]: false })), []);

  const isDialogOpen = (id: string) => !!openDialogs[id];

  return <DialogContext.Provider value={{ isDialogOpen, dialogOpen, dialogClose }}>{children}</DialogContext.Provider>;
};

export { useDialogContext, DialogProvider };

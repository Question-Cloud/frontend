"use client";

import { createContext, useContext, useState } from "react";

interface UserSessionContextProps {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

const UserSessionContext = createContext<UserSessionContextProps | undefined>(undefined);

const useUserSessionContext = () => {
  const context = useContext(UserSessionContext);
  if (!context) {
    throw new Error("useUserSessionContext는 UserSessionProvider 내부에서 사용되어야 합니다.");
  }
  return context;
};

function UserSessionProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState("");

  return <UserSessionContext.Provider value={{ accessToken, setAccessToken }}>{children}</UserSessionContext.Provider>;
}

export { UserSessionProvider, useUserSessionContext };

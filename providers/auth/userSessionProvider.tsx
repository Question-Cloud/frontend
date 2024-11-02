"use client";

import { accessTokenName } from "@/shared/constant";
import { createContext, useContext, useEffect, useState } from "react";
import { useUserInfoApi } from "./api";
import { useDialogContext } from "../dialog";

interface UserSessionContextProps {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  name: string;
  isCreator: boolean;
  isLoggedIn: boolean;
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
  const { dialogOpen } = useDialogContext();
  const { mutate: userInfo, data: userInfoData, error: userInfoError } = useUserInfoApi();

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [isCreator, setIsCreator] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(accessTokenName);
    if (token) {
      setAccessToken(token);
      setIsLoggedIn(true);
    } else {
      setAccessToken(null);
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      userInfo();
    }
  }, [accessToken]);

  useEffect(() => {
    if (userInfoData) {
      setName(userInfoData.myInformation.name);
      setIsCreator(userInfoData.myInformation.userType === "CreatorUser" ? true : false);
    }
  }, [userInfoData]);

  useEffect(() => {
    if (userInfoError) {
      dialogOpen("userInfoError");
    }
  }, [userInfoError]);

  return (
    <UserSessionContext.Provider value={{ accessToken, setAccessToken, name, isCreator, isLoggedIn }}>
      {children}
    </UserSessionContext.Provider>
  );
}

export { UserSessionProvider, useUserSessionContext };

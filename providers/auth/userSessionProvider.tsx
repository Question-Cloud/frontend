"use client";

import { accessTokenName } from "@/shared/constant";
import { createContext, useContext, useEffect, useState } from "react";
import { UserInfo, useUserInfoApi } from "./api";
import { useDialogContext } from "../dialog";

interface UserSessionContextProps {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  userInfo: UserInfo;
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
  const { mutate: getUserInfo, data: userInfoData, error: userInfoError } = useUserInfoApi();

  const [accessToken, setAccessToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    myInformation: {
      profileImage: "",
      name: "",
      email: "",
      phone: "",
      userType: "NormalUser",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem(accessTokenName);
    if (token) {
      setAccessToken(token);
      setIsLoggedIn(true);
    } else {
      setAccessToken("");
    }
  }, []);

  useEffect(() => {
    if (accessToken && isLoggedIn) {
      getUserInfo();
    }
  }, [accessToken, isLoggedIn]);

  useEffect(() => {
    if (userInfoData) {
      setUserInfo({
        myInformation: {
          profileImage: userInfoData.myInformation.profileImage,
          name: userInfoData.myInformation.name,
          email: userInfoData.myInformation.email,
          phone: userInfoData.myInformation.phone,
          userType: userInfoData.myInformation.userType,
        },
      });
    }
  }, [userInfoData]);

  useEffect(() => {
    if (userInfoError) {
      dialogOpen("userInfoError");
    }
  }, [dialogOpen, userInfoError]);

  return (
    <UserSessionContext.Provider value={{ accessToken, setAccessToken, isLoggedIn, userInfo }}>
      {children}
    </UserSessionContext.Provider>
  );
}

export { UserSessionProvider, useUserSessionContext };

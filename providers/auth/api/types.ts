import { UserAuthTokenResponse } from "@/shared";

interface RefreshUserResponse extends UserAuthTokenResponse {}

interface UserInfo {
  myInformation: {
    profileImage: string;
    name: string;
    email: string;
    phone: string;
    userType: "NormalUser" | "CreatorUser";
  };
}

export type { RefreshUserResponse, UserInfo };

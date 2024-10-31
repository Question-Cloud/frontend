import { UserAuthTokenResponse } from "@/shared/types";

interface OAuthRequest {
  accountType: string;
  code: string | null;
}

interface OAuthResponse extends UserAuthTokenResponse {
  isRegistered: boolean;
  registerToken: string;
}

export type { OAuthRequest, OAuthResponse };

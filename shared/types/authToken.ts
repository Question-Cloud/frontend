interface authToken {
  accessToken: string;
  refreshToken: string;
}

interface UserAuthTokenResponse {
  authenticationToken: authToken;
}

export type { UserAuthTokenResponse };

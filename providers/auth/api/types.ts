interface RefreshUserResponse {
  authenticationToken: {
    accessToken: string;
    refreshToken: string;
  };
}

export type { RefreshUserResponse };

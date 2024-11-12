export const createQueryString = (params: Record<string, string | number | undefined>): string => {
  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${encodeURIComponent(value!.toString())}`)
    .join("&");

  return queryString ? `?${queryString}` : "";
};

export function filterEmptyParams(params: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) =>
        value !== "" && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0)
    )
  );
}

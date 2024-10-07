import { act, render, renderHook } from "@testing-library/react";
import { useRegister } from "./useRegister";
import { useRegisterApi } from "../../api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../api", () => ({
  useRegisterApi: jest.fn(),
}));

const testData = {
  name: "테스트",
  email: "test@example.com",
  phone: "01012345678",
  password: "Password123!",
  passwordConfirm: "Password123!",
};

const queryClient = new QueryClient();

describe("useRegister", () => {
  it("handleRegister 함수가 실행되고, API 호출이 이루어진다.", async () => {
    const mockMutate = jest.fn();
    const mockIsSuccess = { success: true };
    const mockIsError = false;
    const mockIsPending = false;

    (useRegisterApi as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isSuccess: mockIsSuccess,
      isError: mockIsError,
      isPending: mockIsPending,
    });

    const { result } = renderHook(() => useRegister(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });

    await act(async () => {
      result.current.handleRegister(testData);
    });

    expect(mockMutate).toHaveBeenCalledTimes(1);
    expect(mockMutate).toHaveBeenCalledWith(testData);
  });

  it("handleRegister 함수가 실행되지만, API 호출이 실패한다.", async () => {
    const mockMutate = jest.fn();
    const mockIsSuccess = { success: false };
    const mockIsError = true;
    const mockIsLoading = false;

    (useRegisterApi as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isSuccess: mockIsSuccess,
      isError: mockIsError,
      isLoading: mockIsLoading,
    });

    const { result } = renderHook(() => useRegister(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });

    await act(async () => {
      try {
        result.current.handleRegister(testData);
      } catch (error) {
        expect(error).toEqual(new Error("API 호출에 실패했습니다."));
      }
    });

    expect(mockMutate).toHaveBeenCalledTimes(1);
    expect(mockMutate).toHaveBeenCalledWith(testData);
  });
});

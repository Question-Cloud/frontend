interface ApiErrorMessage {
  [key: number]: string;
  serverError: string;
  networkError: string;
}

const API_ERROR_MESSAGE: ApiErrorMessage = {
  400: "잘못된 요청이에요",
  401: "인증을 실패했어요",
  403: "요청 권한이 없어요",
  404: "요청하신 내용을 찾을 수 없어요",
  serverError: "서버 오류가 발생했어요",
  networkError: "네트워크 오류가 발생했어요",
};

const SERVER_ERROR_REGEX = /^5\d{2}$/;
const NETWORK_ERROR_REGEX = /^1\d{2}$/;

const ROUTE_ERROR_MESSAGE = "찾으시는 페이지가 없어요";

export { API_ERROR_MESSAGE, SERVER_ERROR_REGEX, NETWORK_ERROR_REGEX, ROUTE_ERROR_MESSAGE };

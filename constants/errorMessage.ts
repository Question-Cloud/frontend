const SERVER_ERROR_REGEX = /^5\d{2}$/;

const ERRORS = {
  400: {
    message: "잘못된 요청입니다.",
  },
  401: {
    message: "잘못된 인증 정보입니다. 다시 로그인 해주세요.",
  },
  403: {
    message: "요청 권한이 없어요.",
  },
  404: {
    message: "요청하신 내용을 찾을 수 없어요.",
  },
  500: {
    message: "서버에서 오류가 발생했어요.",
  },
  0: {
    message: "알 수 없는 오류가 발생했어요.\n같은 문제가 지속되는 경우 개발자에게 문의해주세요.",
  },
} as const;

export type ErrorUnion = (typeof ERRORS)[keyof typeof ERRORS];

export { ERRORS, SERVER_ERROR_REGEX };

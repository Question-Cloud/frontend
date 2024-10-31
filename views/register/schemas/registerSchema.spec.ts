import { registerSchema } from "./registerSchema";

describe("registerSchema", () => {
  it("올바른 데이터를 입력하면 유효성 검사를 통과한다.", () => {
    const validData = {
      name: "테스트",
      email: "test@example.com",
      phone: "01012345678",
      password: "Password123!",
      passwordConfirm: "Password123!",
    };

    const result = registerSchema.safeParse(validData);

    expect(result.success).toBe(true);
  });

  it("닉네임이 비어있으면 유효성 검사에 실패한다.", () => {
    const invalidData = {
      name: "",
      email: "test@example.com",
      phone: "01012345678",
      password: "Password123!",
      passwordConfirm: "Password123!",
    };

    const result = registerSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("닉네임을 입력해주세요.");
  });

  it("유효하지 않은 이메일 형식을 입력하면 유효성 검사에 실패한다.", () => {
    const invalidData = {
      name: "테스트",
      email: "invalidemail",
      phone: "01012345678",
      password: "Password123!",
      passwordConfirm: "Password123!",
    };

    const result = registerSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("이메일 형식이 유효하지 않습니다.");
  });

  it("전화번호에 숫자가 아닌 문자를 입력하면 유효성 검사에 실패한다.", () => {
    const invalidData = {
      name: "테스트",
      email: "test@example.com",
      phone: "010da아2341",
      password: "Password123!",
      passwordConfirm: "Password123!",
    };

    const result = registerSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("전화번호는 숫자만 입력해야 합니다.");
  });

  it("유효하지 않은 전화번호 형식을 입력하면 유효성 검사에 실패한다.", () => {
    const invalidData = {
      name: "테스트",
      email: "test@example.com",
      phone: "10112341323",
      password: "Password123!",
      passwordConfirm: "Password123!",
    };

    const result = registerSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("전화번호 형식이 유효하지 않습니다.");
  });

  it("비밀번호가 8자리 미만이면 유효성 검사에 실패한다.", () => {
    const invalidData = {
      name: "테스트",
      email: "test@example.com",
      phone: "01012345678",
      password: "Pas123!",
      passwordConfirm: "Pas123!",
    };

    const result = registerSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("비밀번호는 최소 8자 이상이어야 합니다.");
  });

  it("비밀번호에 영문, 숫자, 특수문자가 포함되지 않으면 유효성 검사에 실패한다.", () => {
    const invalidData = {
      name: "테스트",
      email: "test@example.com",
      phone: "01012345678",
      password: "Password123",
      passwordConfirm: "Password123",
    };

    const result = registerSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.");
  });

  it("비밀번호가 일치하지 않으면 유효성 검사에 실패한다.", () => {
    const invalidData = {
      name: "테스트",
      email: "test@example.com",
      phone: "01012345678",
      password: "Password123!",
      passwordConfirm: "Password123#",
    };

    const result = registerSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("비밀번호가 일치하지 않습니다.");
  });
});

const isPassword = (password: string) => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;
  return re.test(password);
};

export { isPassword };

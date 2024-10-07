const isHomePhone = (value: string) => {
  const re = /^0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4])[ -]?\d{3,4}[ -]?\d{4}$/;
  return re.test(value);
};

export { isHomePhone };

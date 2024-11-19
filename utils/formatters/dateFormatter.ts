const dateFormatWithHourAndMinutes = (date: string) => {
  const convertedDate = new Date(date);
  const formattedDate = `${convertedDate.getFullYear()}.${String(convertedDate.getMonth() + 1).padStart(2, "0")}.${String(convertedDate.getDate()).padStart(2, "0")} ${String(convertedDate.getHours()).padStart(2, "0")}:${String(convertedDate.getMinutes()).padStart(2, "0")}`;

  return formattedDate;
};

export { dateFormatWithHourAndMinutes };

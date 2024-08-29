export const convertStringColorToHex = (stringColor: string) => {
  switch (stringColor) {
    case "black":
      return "#1B1B1B";
    case "white":
      return "#FFFFFF";
    case "gray_01":
      return "#EEEEEE";
    case "gray_02":
      return "#D8D8D8";
    case "gray_03":
      return "#B4B4B4";
    case "gray_04":
      return "#929292";
    case "gray_05":
      return "#696969";
    case "gray_06":
      return "#454545";
    case "navy":
      return "#1A3260";
    case "red":
      return "#E12B55";
    case "green":
      return "#4DA764";
    case "yellow":
      return "#FFDE75";
  }

  return "";
};

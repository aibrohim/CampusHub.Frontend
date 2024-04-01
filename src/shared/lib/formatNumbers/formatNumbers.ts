export const formatNumbers = (number: number): string => {
  if (number > 1000000) {
    return `${Math.round(number / 100000) / 10}M`;
  } else if (number > 1000) {
    return `${Math.round(number / 100) / 10}K`;
  } else return number + "";
};

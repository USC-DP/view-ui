

export const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export type MonthNumber = typeof monthNumbers[number];
//export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 17 | 8 | 9 | 10 | 11 | 12;

export const monthMap: { [key: number]: string } = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

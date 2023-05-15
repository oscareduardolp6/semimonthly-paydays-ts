import { Month } from "./months";
import { WeekDays } from "./weekDays";

/**
 * This function returns the two paydays in a given month and year, taking into account weekends.
 * @param {Month} month - The month for which the paydays are being calculated. It should be a number
 * between 0 (January) and 11 (December), or a Month enum value if available in the codebase.
 * @param year - The year for which the paydays are being calculated. If no year is provided, it
 * defaults to the current year.
 * @returns The function `getPayDaysInMonth` returns an tuple of two `Date` objects representing the
 * first and second paydays of a given month and year.
 */
export const getPayDaysInMont = (month: Month, year = new Date().getFullYear()): [Date, Date] => {
  let firstPayDay = new Date(year, month, 15);
  let secondPayDay = new Date(year, month + 1, 0); 

  const dayOfTheWeekFirstDay = firstPayDay.getDay();
  const dayOfTheWeekSecondDay = secondPayDay.getDay(); 

  if(dayOfTheWeekFirstDay === WeekDays.Sunday) 
    firstPayDay.setDate(firstPayDay.getDate() - 2);
  if(dayOfTheWeekFirstDay === WeekDays.Saturday)
    firstPayDay.setDate(firstPayDay.getDate() - 1);

  if(dayOfTheWeekSecondDay === WeekDays.Sunday)
    secondPayDay.setDate(secondPayDay.getDate() - 2); 
  if(dayOfTheWeekSecondDay === WeekDays.Saturday)
    secondPayDay.setDate(secondPayDay.getDate() - 1);

  return [firstPayDay, secondPayDay];
}
import { Month } from "./months";
import { WeekDays } from "./weekDays";

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
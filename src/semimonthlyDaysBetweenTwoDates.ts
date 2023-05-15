import { getPayDaysInMont } from "./paydaysInMonth";

/**
 * Calculates the number of semimonthly paydays between two given dates.
 * The first day should be before ths second day.
 * @param {Date} date1 - The first date to calculate the number of semimonthly pay days between.
 * @param {Date} date2 - The second date to calculate the number of semimonthly pay days between.
 * @returns the number of semimonthly pay days between two given dates.
 */
export const getSemimonthlyDaysBetweenTwoDates = (date1: Date, date2: Date): number => {
  let payDays = 0, 
      initialDate = new Date(date1), 
      finalDate = new Date(date2), 
      initialMonth = initialDate.getMonth(),
      initialYear = initialDate.getFullYear(), 
      payDaysInMonth = getPayDaysInMont(initialMonth, initialYear)
        .map(date => date.getTime());
  
  while(initialDate.getTime() !== finalDate.getTime()){
    payDaysInMonth = 
      initialDate.getMonth() === initialMonth 
      ? payDaysInMonth 
      : getPayDaysInMont(initialDate.getMonth(), initialDate.getFullYear())
        .map(date => date.getTime()); 

    if(payDaysInMonth.includes(initialDate.getTime())){
      payDays++;
    }
    initialDate.setDate(initialDate.getDate() + 1);
  }
  if(date1.getTime() === date2.getTime() && payDaysInMonth.includes(date1.getTime())){
    payDays++;
  }

  return payDays;
}
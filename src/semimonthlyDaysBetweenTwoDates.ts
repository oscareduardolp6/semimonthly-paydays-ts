import { getPayDaysInMont } from "./paydaysInMonth";

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
import { describe, it, expect } from '@jest/globals';
import { Month } from '../src/months';
import { getPayDaysInMont } from '../src/paydaysInMonth';


describe('Check the correct calculation of the semimonthly dates in a month', () => {
  it('Should be 14/Apr/2023 & 28/Apr/2023 when the month is April', () => {
    const dates = getPayDaysInMont(Month.April, 2023).map(date => date.getTime());
    expect(dates).toEqual([new Date(2023, 3, 14).getTime(), new Date(2023, 3, 28).getTime()]);
  })

  it('Should be 15/May/2023 & 31/May/2023 when the month is May', () => {
    const dates = getPayDaysInMont(Month.May, 2023).map(date => date.getTime());
    expect(dates).toEqual([new Date(2023, 4, 15).getTime(), new Date(2023, 4, 31).getTime()]);
  })

  it('Should be 15/Jun/2023 & 30/Jun/2023 when the month is June', () => {
    const dates = getPayDaysInMont(Month.June, 2023)
                    .map(date => date.getTime()); 
    expect(dates).toEqual([new Date(2023, 5, 15).getTime(), new Date(2023, 5, 30).getTime()]);
  })
})
import { describe, it, expect } from '@jest/globals';

type TestFunction = (date1: Date, date2: Date) => number;
const fn: TestFunction = (date1, date2) => {
  return 2; 
}

describe('Check the correct calculation of the semimonthly pay days between two dates', () => {
  it('Should be one day between 13/May/2023 and 16/May/2023', () => {
    const firstDate = new Date(2023, 4, 13); 
    const secondDate = new Date(2023, 4, 16);
    const daysBetweenTwoDates = fn(firstDate, secondDate);
    expect(daysBetweenTwoDates).toBe(1);
  })

  it('Should be none days between 29/Apr/2023 and 30/Apr/2023', () => {
    const firstDate = new Date(2023, 3, 29); 
    const secondDate = new Date(2023, 3, 30);
    const daysBetweenTwoDates = fn(firstDate, secondDate);
    expect(daysBetweenTwoDates).toBe(0);
  })

  it('Should be three days between 30/Mar/2023 and 30/Apr/2023', () => {
    const firstDate = new Date(2023, 2, 30);
    const secondDate = new Date(2023, 3, 30);
    const daysBetweenTwoDates = fn(firstDate, secondDate);
    expect(daysBetweenTwoDates).toBe(3);
  })
})


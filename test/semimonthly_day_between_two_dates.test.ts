import { describe, it, expect } from '@jest/globals';
import { getSemimonthlyDaysBetweenTwoDates } from '../src/semimonthlyDaysBetweenTwoDates';


describe('Check the correct calculation of the semimonthly pay days between two dates', () => {
  it('Should be one day between 13/May/2023 and 16/May/2023', () => {
    const firstDate = new Date(2023, 4, 13); 
    const secondDate = new Date(2023, 4, 16);
    const daysBetweenTwoDates = getSemimonthlyDaysBetweenTwoDates(firstDate, secondDate);
    expect(daysBetweenTwoDates).toBe(1);
  })

  it('Should be none days between 29/Apr/2023 and 30/Apr/2023', () => {
    const firstDate = new Date(2023, 3, 29); 
    const secondDate = new Date(2023, 3, 30);
    const daysBetweenTwoDates = getSemimonthlyDaysBetweenTwoDates(firstDate, secondDate);
    expect(daysBetweenTwoDates).toBe(0);
  })

  it('Should be three days between 30/Mar/2023 and 30/Apr/2023', () => {
    const firstDate = new Date(2023, 2, 30);
    const secondDate = new Date(2023, 3, 30);
    const daysBetweenTwoDates = getSemimonthlyDaysBetweenTwoDates(firstDate, secondDate);
    expect(daysBetweenTwoDates).toBe(3);
  })

  it('Should be one day between 30/Mar/2023 and 30/Mar/2023', () => {
    const firstDate = new Date(2023, 2, 31);
    const secondDate = new Date(2023, 2, 31);
    const daysBetweenTwoDates = getSemimonthlyDaysBetweenTwoDates(firstDate, secondDate);
    expect(daysBetweenTwoDates).toBe(1);
  })
})


# Semimonthly Paydays 

Creating an application that would help me know how much money I had to save each time I got paid at work, I came across the fact that there was no library that provided me with the functionality to determine the paydays and how many of those would be between two dates. Taking this into account and believing that perhaps someone else could find it useful, I developed this library.


## Installation

Install my-project with npm

```bash
  npm i semimonthly-paydays-ts
```
    
## Usage/Examples

There are 2 exported functions: 
- [To get the paydays in a month ](#getPayDaysInMont)
- [To get the paydays between 2 dates](#getSemimonthlyDaysBetweenTwoDates)

### getSemimonthlyDaysBetweenTwoDates

#### Example 1 

```typescript 
    const firstDate = new Date(2023, 3, 29); 
    const secondDate = new Date(2023, 3, 30);
    const daysBetweenTwoDates = getSemimonthlyDaysBetweenTwoDates(firstDate, secondDate);
    console.log(daysBetweenTwoDates) // 0 
    // Because the pay day in that month is 31 
```

#### Example 2 
```typescript 
    const firstDate = new Date(2023, 2, 30);
    const secondDate = new Date(2023, 3, 30);
    const daysBetweenTwoDates = getSemimonthlyDaysBetweenTwoDates(firstDate, secondDate);
    console.log(daysBetweenTwoDates) // 3
    // 31/Mar/2023, 15/Apr/2023, 28/Apr/2023 
```

### getPayDaysInMont 
#### Example 1 
```typescript 
    const dates = getPayDaysInMont(Month.April, 2023); 
    // 14/Apr/2023, 28/Apr/2023
```

#### Example 2 
```typescript 
    const dates = getPayDaysInMont(Month.May, 2023); 
    // 15/May/2023, 31/May/2023
```






## Authors

- [Oscar López](https://oscarlp6.dev/) 


## Contributing

Contributions are always welcome!


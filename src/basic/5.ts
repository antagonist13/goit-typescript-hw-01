const enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}

const isWeekend = (day: string): boolean => {
  const weekends = {
    [DayOfWeek.Saturday]: DayOfWeek.Saturday,
    [DayOfWeek.Sunday]: DayOfWeek.Sunday
  };

return day === weekends.Saturday || day === weekends.Sunday
};
console.log(`Task #5`);

isWeekend("Saturday"); 
isWeekend("Monday");  
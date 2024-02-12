import React, { useState } from 'react'
import CalendarHeader from './CalendarHeader';
 
const CalendarHeaderHandler = () => {
        const [date, setDate] = useState<Date>(new Date());
     
        const handleNextMonth = () => {
          const newDate = new Date(date);
          newDate.setMonth(date.getMonth() + 1);
          setDate(newDate);
        };
     
        const handlePrevMonth = () => {
          const newDate = new Date(date);
          newDate.setMonth(date.getMonth() - 1);
          setDate(newDate);
        };
     
        const handleYearClick = () => {
          const newYear = prompt("Enter new year:");
          if (newYear) {
            const newDate = new Date(date);
            newDate.setFullYear(parseInt(newYear, 10));
            setDate(newDate);
          }
        };
        const programs = [
          { date: new Date(2024, 1, 1) }, // February 1st, 2024
          { date: new Date(2024, 1, 1) }, // February 1st, 2024
          { date: new Date(2024, 1, 5) }, // February 5th, 2024
          { date: new Date(2024, 1, 10) }, // February 10th, 2024
          { date: new Date(2024, 1, 15) }, // February 15th, 2024
          { date: new Date(2024, 1, 15) }, // February 15th, 2024
          { date: new Date(2024, 1, 20) }, // February 20th, 2024
        ];
  return (
  <>
  <CalendarHeader date={date} handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} handleYearClick={handleYearClick} programs={programs}/>
  </>
  )
}
 
export default CalendarHeaderHandler
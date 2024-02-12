  // types/index.ts
 
  // Type for the handleNextMonth function
  export type HandleNextMonth = () => void;
 
  // Type for the handlePrevMonth function
  export type HandlePrevMonth = () => void;
 
  // Type for the handleYearClick function
  export type HandleYearClick = () => void;
 
  // Type for the Program object
  export type Program = {
    date: Date;
  };
 
  export type CalendarBodyProps = {
      currentDate: Date;
      isCurrentMonth: boolean;
      dayNumber: number;
      programInfo: JSX.Element | null;
    }
   
  export type WeekGridProps = {
      currentDate: Date;
      programs: { date: Date }[]; // Assuming programs have a 'date' property
    }
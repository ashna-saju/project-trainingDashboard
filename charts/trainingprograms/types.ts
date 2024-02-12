export type Course = {
    course: string;
    instructor: string;
    date: string; // assuming date is a string in the format 'MM/DD/YYYY'
  };
  
 export  type trainingProgramsChartBodyProps = {
    trainingDetails: Course[];
  };
  

 export  type trainingProgramsChartBodyCardProps={
    program:Course,
    month:string,
    day:number
  }
  

  export type trainingProgramsChartHeaderProps = {
  headerText: string;
  next: string;
  handleFilter: () => void;
};
  
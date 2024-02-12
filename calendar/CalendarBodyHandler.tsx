import React from 'react';
import { Grid, Typography } from '@mui/material';
import { WeekGridProps } from './types';
import CalendarBody from './CalendarBody';
 
const CalendarBodyHandler: React.FC<WeekGridProps> = ({ currentDate, programs }) => {
  const daysOfWeek: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
 
  const startDate: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endDate: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
 
  const startDayIndex: number = startDate.getDay();
  const endDayIndex: number = endDate.getDay();
 
  const daysInMonth: number = endDate.getDate();
  const totalDaysToShow: number = daysInMonth + startDayIndex + (6 - endDayIndex);
 
  const dayCells: JSX.Element[] = [];
 
  for (let i = 0; i < totalDaysToShow; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i - startDayIndex);
 
    const isCurrentMonth: boolean = currentDate.getMonth() === startDate.getMonth();
    const dayNumber: number = currentDate.getDate();
 
    // Count the number of programs assigned to this date
    const numPrograms: number = programs.filter(program => {
      return program.date.getFullYear() === currentDate.getFullYear() &&
             program.date.getMonth() === currentDate.getMonth() &&
             program.date.getDate() === currentDate.getDate();
    }).length;
 
    // Render program information only if there are any programs assigned
    const programInfo = numPrograms > 0 ? (
      <Grid container item>
        <Typography variant="caption" fontWeight='100' fontSize='0.8rem' color='#D809A9'>{`${numPrograms} Program${numPrograms !== 1 ? 's' : ''}`}</Typography>
      </Grid>
    ) : null;
 
    dayCells.push(
      <CalendarBody currentDate={currentDate} isCurrentMonth={isCurrentMonth} dayNumber={dayNumber} programInfo={programInfo} />
    );
  }
 
  return (
    <Grid container>
      <Grid container item xs={12} justifyContent='space-between' alignItems='center' style={{ height: '3.75rem', paddingLeft: '0.6rem', paddingRight: '0.6rem' }}>
        {daysOfWeek.map((day, index) => (
          <Grid container item key={index} xs={1.5} justifyContent='center' alignItems='center'>
            <Typography variant="body1">{day}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} gap={1} justifyContent="space-between" alignItems="center" style={{ paddingLeft: '0.6rem', paddingRight: '0.6rem' }}>
        {dayCells}
      </Grid>
    </Grid>
  );
};
 
export default CalendarBodyHandler;
 
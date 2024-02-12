// TrainingHoursProgressHandler.tsx
import React from 'react';
import TrainingHours from './TrainingHours';
import { TrainingHoursProgressData } from './types';
import { Grid } from '@mui/material';

const TrainingHoursHandler = () => {
  const trainingHoursData: TrainingHoursProgressData[] = [
    { label: "Completed", value: 250, color: "#0A66C2" },
    { label: "Pending", value: 300, color: "#9BC5EC" },
  ];

  return(
    <Grid>
       <TrainingHours data={trainingHoursData}/>
    </Grid>
     
  )
};

export default TrainingHoursHandler;

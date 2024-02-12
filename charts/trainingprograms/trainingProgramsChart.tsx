import React, { useState } from 'react';
import { Grid, Divider } from '@mui/material';

import TrainingProgramsChartDate from './trainingProgramsChartDate.tsx';
import TrainingProgramsChartHeader from './trainingProgramsChartHeader.tsx';

const TrainingProgramsChart = () => {
  const headerContent = ['Upcoming', 'Ongoing'];
  const bodyContent__upcoming = [
    { course: 'Foundations of CyberSec', instructor: 'Suneesh', date: '01/06/2024' },
    { course: 'Foundations of AI', instructor: 'Suneesh', date: '01/07/2024' },
    { course: 'Foundations of Java', instructor: 'Suneesh', date: '01/08/2024' },
    { course: 'Foundations of Web ', instructor: 'Suneesh', date: '01/09/2024' }
  ];

  const [state, setState] = useState(headerContent[0]);
  const [next, setNext] = useState(headerContent[1]);

  const handleFilter = () => {
    const currentIndex = headerContent.indexOf(state);
    const nextIndex = (currentIndex + 1) % headerContent.length;
    setState(headerContent[nextIndex]);
    setNext(headerContent[(nextIndex + 1) % headerContent.length]);
  };

  return (
    <Grid >
      <Grid container  item lg={12}>
        <TrainingProgramsChartHeader
          headerText={state}
          next={next}
          handleFilter={handleFilter}
        />
        <Divider />
        
          <TrainingProgramsChartDate trainingDetails={bodyContent__upcoming} />
      </Grid>
    </Grid>
  );
};

export default TrainingProgramsChart;

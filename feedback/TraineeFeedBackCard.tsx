import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Rating from '@mui/material/Rating';
import { TraineeFeedbackData } from './types';

const TraineeFeedbackCard: React.FC<{ data: TraineeFeedbackData[] }> = ({ data }) => {
  return (
    <>
      {data.map((feedback, index) => (
        <Card key={index} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.13)', mb: '.6rem' }}>
          <CardContent sx={{ mb: '-.5rem' }}>
            <Grid container sx={{ alignItems: 'center', pl:2, pr:1 }} spacing={2}>
              <Grid item xs={3}>
                <Typography variant="body2">{feedback.name}</Typography>
              </Grid>
              <Grid item xs={3} sx={{ textAlign: 'center' }}>
                <Typography variant="body2">{feedback.department}</Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DateRangeIcon fontSize="small" sx={{ marginRight: '6px', color: '#545659' }} />
                <Typography variant="body2">{feedback.date}</Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  textAlign: 'center',
                  pl: 3,
                }}
              >
                <Rating name="text-feedback" value={feedback.rating} readOnly precision={0.5} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TraineeFeedbackCard;

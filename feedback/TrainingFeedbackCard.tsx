import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { FeedbackCardData } from './types';
import { Link } from 'react-router-dom';

const getColor = (rating: number) => {
  if (rating > 4) {
    return '#4CAF50'; // Dark Green
  } else if (rating > 3) {
    return '#8BC34A'; // Light Green
  } else if (rating > 2) {
    return '#FFC107'; // Yellow
  } else if (rating > 1) {
    return '#FF9800'; // Orange
  } else {
    return '#F44336'; // Red
  }
};


interface TrainingFeedbackCardProps {
  data: FeedbackCardData[];
}

const TrainingFeedbackCard: React.FC<TrainingFeedbackCardProps> = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-between' }}>
      {data.map((feedback, index) => (
        
        <Card key={index} sx={{ width: '23%', marginBottom: '20px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', mr: 1.25, borderRight: "3.5px solid", borderRightColor: getColor(feedback.rating), p:"1rem" }}>
          <Link to={`/feedback/${index}`} key={index} style={{ textDecoration: 'none'}}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" component="div" color="#333">
                {feedback.training}
              </Typography>
              <Avatar
                sx={{
                  backgroundColor: '#4169E1',
                  color: '#fff',
                  fontSize: 14,
                  width: 30,
                  height: 30, 
                }}
              >
                {feedback.rating}
              </Avatar>
            </Box>
            <Typography variant="body2" color="#555" mt={2}>
              Trainer: {feedback.trainer}
            </Typography>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
                mt: 2,
                color: getColor(feedback.rating),
              }}
            >
              <Rating name="text-feedback" value={feedback.rating} readOnly precision={0.5} />
              {/* <Box sx={{ ml: 2, fontWeight: 400, fontSize: 16, pl: 3 }}>{labels[feedback.rating]}</Box> */}
            </Box>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default TrainingFeedbackCard;

import React from 'react';
import TrainingFeedbackCard from './TrainingFeedbackCard';
import { FeedbackCardData } from './types';

const TrainingFeedbackCardHandler: React.FC = () => {
  const feedbackCardData: FeedbackCardData[] = [
    { training: 'Angular', trainer: 'Anna', rating: 1 },
    { training: 'React', trainer: 'Jerry', rating: 2 },
    { training: 'DotNet', trainer: 'Tony', rating: 3 },
    { training: 'Node', trainer: 'Paul', rating: 4 },
    { training: 'Java', trainer: 'Mariya', rating: 5 },
  ];

  return <TrainingFeedbackCard data={feedbackCardData} />;
};

export default TrainingFeedbackCardHandler;

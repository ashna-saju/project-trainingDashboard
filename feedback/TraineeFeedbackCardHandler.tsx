import React from 'react';
import TraineeFeedbackCard from './TraineeFeedBackCard';
import { TraineeFeedbackData } from './types';

const TraineeFeedbackCardHandler: React.FC = () => {
  const traineeFeedbackData: TraineeFeedbackData[] = [
    { name: 'Anish S', department: 'DU1', date: '01-02-2024', rating: 5 },
    { name: 'Aswin TS', department: 'DU2', date: '01-02-2024', rating: 4.5 },
    { name: 'Ashna Saju', department: 'DU3', date: '01-02-2024', rating: 4 },
    { name: 'Roshan Roy S', department: 'DU1', date: '01-02-2024', rating: 3.5 },
    { name: 'Navya George S', department: 'DU2', date: '01-02-2024', rating: 3 },
  ];

  return <TraineeFeedbackCard data={traineeFeedbackData} />;
};

export default TraineeFeedbackCardHandler;

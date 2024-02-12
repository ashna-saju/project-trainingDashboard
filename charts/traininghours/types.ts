// types.ts
export type TrainingHoursProgressData = {
  label: string;
  value: number;
  color: string;
}

export type TrainingHoursProgressProps = {
  data: TrainingHoursProgressData[];
}
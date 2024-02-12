export type Course = {
  trainingName: string;
  trainerName: string;
  startDate: string;
  endDate: string;
  targetAudience: string;
  numberOfSeats: string;
};
export type ProgramListCardProps = {
  programData: Course[];
  anchorEl: HTMLElement | null;
  handlePopoverOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handlePopoverClose: () => void;
  open: boolean;
};

export type trainingsCount = {
  type: string;
  count: number;
};

export type trainingsCountProps = {
  trainingsCount: trainingsCount[];
};

export type TargetAudience = {
  name: string;
};

export type Trainer = {
  trainerType: string;
  fullname: string;
};

export type ProgramAudience = {
  audienceId: number;
  TargetAudience: TargetAudience;
};

export type ProgramTrainer = {
  trainerId: number;
  Trainer: Trainer;
};

export type TrainingProgram = {
  title: string;
  description: string;
  trainingMode: string;
  startDate: string;
  endDate: string;
  duration: number;
  availableSeats: number;
  occuranceType: string;
  occuranceInterval: number;
  status: string;
  trainingType: string;
  ProgramAudiences: ProgramAudience[];
  ProgramTrainers: ProgramTrainer[];
};

import ProgramHeader from "./ProgramHeader";
import { trainingsCount } from "./types";

const ProgramHeaderHandler = () => {
  const trainingsCount: trainingsCount[] = [
    { type: "Total Trainings", count: 10 },
    { type: "Technical Trainings", count: 5 },
    { type: "Soft Skill Trainings", count: 3 },
    { type: "Language Trainings", count: 2 },
  ];

  return <ProgramHeader trainingsCount={trainingsCount} />;
};

export default ProgramHeaderHandler;

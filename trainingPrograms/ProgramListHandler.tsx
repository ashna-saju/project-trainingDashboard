import React, { useState } from "react";
import ProgramListCard from "./ProgramListCard";
import { Course } from "./types";

const ProgramListHandler = () => {
  const programData: Course[] = [
    {
      trainingName: "DotNet",
      trainerName: "Suneesh",
      startDate: "06-07-2023",
      endDate: "05-06-2024",
      targetAudience: "Developers",
      numberOfSeats: "20",
    },
    {
      trainingName: "DotNet",
      trainerName: "Suneesh Thambi",
      startDate: "06-07-2023",
      endDate: "05-06-2024",
      targetAudience: "Developers",
      numberOfSeats: "20",
    },
    {
      trainingName: "Full stack java script",
      trainerName: "Neena Mary Alex",
      startDate: "06-07-2023",
      endDate: "05-06-2024",
      targetAudience: "Developers",
      numberOfSeats: "20",
    },
    {
      trainingName: "DotNet",
      trainerName: "Suneesh",
      startDate: "06-07-2023",
      endDate: "05-06-2024",
      targetAudience: "Developers",
      numberOfSeats: "20",
    },
  ];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <ProgramListCard
        programData={programData}
        anchorEl={anchorEl}
        handlePopoverOpen={handlePopoverOpen}
        handlePopoverClose={handlePopoverClose}
        open={open}
      />
    </div>
  );
};

export default ProgramListHandler;

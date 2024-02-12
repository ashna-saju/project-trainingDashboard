import { useState } from "react";
import ProgramRequestCard from "./ProgramRequestCard";
import { Grid, Typography } from "@mui/material";
import { TrainingProgram } from "./types";

const trainingPrograms: TrainingProgram[] = [
  {
    title: "Angular Workshop",
    description: "Advanced Angular Training",
    trainingMode: "Offline",
    startDate: "2024-03-01",
    endDate: "2024-03-10",
    duration: 10,
    availableSeats: 25,
    occuranceType: "Daily",
    occuranceInterval: 1,
    status: "Upcoming",
    trainingType: "Technical",
    ProgramAudiences: [
      {
        audienceId: 1,
        TargetAudience: {
          name: "Developers",
        },
      },
      {
        audienceId: 2,
        TargetAudience: {
          name: "Designers",
        },
      },
    ],
    ProgramTrainers: [
      {
        trainerId: 1,
        Trainer: {
          trainerType: "Internal",
          fullname: "John Doe",
        },
      },
      {
        trainerId: 2,
        Trainer: {
          trainerType: "External",
          fullname: "Jane Smith",
        },
      },
    ],
  },
  {
    title: "React Workshop",
    description: "Advanced React Training",
    trainingMode: "Online",
    startDate: "2024-03-15",
    endDate: "2024-03-25",
    duration: 10,
    availableSeats: 30,
    occuranceType: "Daily",
    occuranceInterval: 1,
    status: "Upcoming",
    trainingType: "Technical",
    ProgramAudiences: [
      {
        audienceId: 1,
        TargetAudience: {
          name: "Developers",
        },
      },
      {
        audienceId: 2,
        TargetAudience: {
          name: "Designers",
        },
      },
    ],
    ProgramTrainers: [
      {
        trainerId: 1,
        Trainer: {
          trainerType: "Internal",
          fullname: "Alice Johnson",
        },
      },
      {
        trainerId: 2,
        Trainer: {
          trainerType: "External",
          fullname: "Bob Brown",
        },
      },
    ],
  },
];

const ProgramRequestCardHandler = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handlePopoverOpen = (index: number) => {
    setTimeout(() => {
      setOpenIndex(index);
    }, 500);
  };

  const handlePopoverClose = () => {
    setOpenIndex(-1);
  };

  return (
    <>
      <Grid container alignItems="center" sx={{ p: "1rem 2rem " }}>
        <Grid item xs={3}>
          <Typography variant="subtitle1">Title </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant="subtitle2">Start Date</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography
            variant="subtitle2"
            display="flex"
            justifyContent={"center"}
          >
            End Date
          </Typography>
        </Grid>

        <Grid item xs={4} display="flex" justifyContent={"center"}>
          <Typography variant="subtitle2">Target Audience</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography variant="subtitle2">Seats</Typography>
        </Grid>
      </Grid>
      {trainingPrograms.map((trainingProgram, index) => (
        <ProgramRequestCard
          trainingProgram={trainingProgram}
          key={index}
          open={openIndex === index}
          handlePopoverOpen={() => handlePopoverOpen(index)}
          handlePopoverClose={handlePopoverClose}
        ></ProgramRequestCard>
      ))}
    </>
  );
};

export default ProgramRequestCardHandler;

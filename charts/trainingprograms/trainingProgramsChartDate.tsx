import React from "react";
import { Grid } from "@mui/material";
import TrainingProgramsBody from "./trainingProgramsChartBody";
import { trainingProgramsChartBodyProps } from "./types";


const TrainingProgramsChartDate: React.FC<trainingProgramsChartBodyProps> = ({ trainingDetails }) => {
  return (
    <Grid container>
      {trainingDetails.map((item, index) => {
        const parsedDate = new Date(item.date);
        const month = parsedDate.toLocaleString("default", { month: "short" });
        const dayOfMonth = parsedDate.getDate();
        return (
          <Grid container item xs={12} md={12}>
            <TrainingProgramsBody key={index} program={item} month={month} day={dayOfMonth} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TrainingProgramsChartDate;

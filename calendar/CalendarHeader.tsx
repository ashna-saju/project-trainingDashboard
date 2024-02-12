import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CalendarBodyHandler from "./CalendarBodyHandler";
import {HandleNextMonth,HandlePrevMonth,HandleYearClick,Program} from './types'
 
interface CalendarHeaderProps {
  date: Date;
  handleNextMonth: HandleNextMonth;
  handlePrevMonth: HandlePrevMonth;
  handleYearClick: HandleYearClick;
  programs: Program[];
}
const CalendarHeader:React.FC<CalendarHeaderProps>= ({date,handleNextMonth,handlePrevMonth,handleYearClick,programs}) =>{
  return (
    <Grid>
      <Grid container item lg={4.5} justifyContent='space-between'>
        <Button onClick={handlePrevMonth}>
          <KeyboardArrowLeftIcon />
        </Button>
        <Typography
          variant="h4"
          onClick={handleYearClick}
        >
          {date.toLocaleString("default", { month: "long" })}{" "}
          {date.getFullYear()}
        </Typography>
        <Button onClick={handleNextMonth}>
          <KeyboardArrowRightIcon />
        </Button>
      </Grid>
      <CalendarBodyHandler currentDate={date} programs={programs}/>
    </Grid>
  );
};
 
export default CalendarHeader;
 
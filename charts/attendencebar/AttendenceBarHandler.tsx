// AttendenceBarGraphHandler.tsx
import React from "react";
import AttendenceBar from "./AttendenceBar";
import { AttendenceData } from "./types";

const AttendenceBarHandler: React.FC = () => {
  const attendenceData: AttendenceData = {
    present: [15, 13, 17, 18, 6],
    total: [20, 18, 20, 20, 10],
    absent: [5, 5, 3, 2, 4],
    programName: ["React", "Angular", "Dot Net", "Node", "Embedded"],
  };

  return <AttendenceBar {...attendenceData} />;
};

export default AttendenceBarHandler;

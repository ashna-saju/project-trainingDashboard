// AttendenceBarGraph.tsx
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Card from "@mui/material/Card";
import { AttendenceData } from "./types";

const AttendenceBar: React.FC<AttendenceData> = ({
  present,
  //   total,
  absent,
  programName,
}) => {
  return (
    <>
      <Card variant="elevation" sx={{ width: '100%',pl:'3rem'}}>
        <BarChart
          width={425}
          height={224}
          series={[
            {
              data: present,
              label: "Present",
              stack: "total",
              color: "#0A66C2",
            },
            { data: absent, label: "Absent", stack: "total", color: "#9BC5EC" },
          ]}
          xAxis={[{ data: programName, scaleType: "band" }]}
          slotProps={{
            legend: {
              labelStyle: {
                fontSize: 13,
              },
              itemMarkWidth:10,
              itemMarkHeight:10,
              markGap: 15,
              itemGap: 15
            },
          }}
          sx={{ width: "100%" }}
        />
      </Card>
    </>
  );
};

export default AttendenceBar;

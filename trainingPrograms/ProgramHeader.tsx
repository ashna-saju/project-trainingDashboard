import { useState } from "react";
import HeaderCard from "../common/HeaderCard";
import CreateButton from "./CreateButton";
import { Box } from "@mui/material";
import { trainingsCountProps } from "./types";

const ProgramHeader = ({ trainingsCount }: trainingsCountProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <CreateButton />
      <Box
        sx={{
          flexGrow: "1",
          display: { xs: "block", sm: "flex", justifyContent: "end" },
        }}
      >
        {trainingsCount.map((trainings, index) => (
          <Box sx={{ mr: 3 }}>
            <HeaderCard
              title={trainings.type}
              count={trainings.count}
              index={index}
              isSelected={selectedCard === index}
              onSelect={handleCardClick}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProgramHeader;

import { Grid } from "@mui/material";
import HeaderCard from "../common/HeaderCard";
import { useState } from "react";
import { NominationAndRequestDataProps } from "./types";

const NominationRequestHeader = ({
  nominationAndRequestData,
}: NominationAndRequestDataProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };
  

  return (
    <Grid container spacing={2} ml=".05rem">
      {nominationAndRequestData.map((data, index) => (
        <Grid item md={2.2} sm={3.5} xs={11}>
          <HeaderCard
            title={data.type}
            count={data.count}
            index={index}
            isSelected={selectedCard === index}
            onSelect={handleCardClick}
          />
        </Grid>
      ))}
      
    </Grid>
  );
};

export default NominationRequestHeader;

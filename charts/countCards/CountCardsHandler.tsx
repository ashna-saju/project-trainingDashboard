import { useState } from "react";
import CountCards from "./CountCards";
import { Count } from "./types";
import { PendingNominationCountData } from "../../../pages/Dashboard/types";

const CountCardsHandler = ({Pending}: PendingNominationCountData) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const counts: Count[] = [
    { id: 1, type: "Pending Nominations", count: Pending },
    { id: 2, type: "Manager Request", count: 0 },
    { id: 3, type: "Total Participation", count: 130 },
  ];
  return (
    <CountCards
      counts={counts}
      selectedCard={selectedCard}
      handleCardClick={handleCardClick}
    />
  );
};

export default CountCardsHandler;

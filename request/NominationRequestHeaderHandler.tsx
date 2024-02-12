import NominationRequestHeader from "./NominationRequestHeader";
import { NominationAndRequestData } from "./types";

const NominationRequestHeaderHandler = () => {
  const nominationAndRequestData: NominationAndRequestData[] = [
    { type: "Pending Nominations", count: 10 },
    { type: "Accepted Nominations", count: 23 },
    { type: "Rejected Nominations", count: 12 },
  ];
  return (
    <NominationRequestHeader
      nominationAndRequestData={nominationAndRequestData}
    />
  );
};

export default NominationRequestHeaderHandler;

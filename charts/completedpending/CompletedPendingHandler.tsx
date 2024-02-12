// CompletedPendingPieHandler.tsx
import CompletedPending from "./CompletedPending";
import { CompletedPendingData } from "./types";

const CompletedPendingHandler = () => {
  const completedPendingData: CompletedPendingData[] = [
    { label: "Completed", value: 5, color: "#03298a" },
    { label: "Pending", value: 15, color: "#9BC5EC" },
    { label: "Cancelled", value: 10, color: "#3168f5" },
  ];

  return <CompletedPending data={completedPendingData} />;
};

export default CompletedPendingHandler;

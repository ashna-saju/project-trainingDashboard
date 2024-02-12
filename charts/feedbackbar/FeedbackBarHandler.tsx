import { FeedbackBarProps } from "./types";
import FeedbackBar from "./FeedbackBar";

const feedbackData: FeedbackBarProps[] = [
  { courseName: "DotNet", feedbackRating: 2.3 },
  { courseName: "React", feedbackRating: 3.5 },
  { courseName: "DotNet", feedbackRating: 2.3 },
  { courseName: "React", feedbackRating: 3.5 },
  { courseName: "DotNet", feedbackRating: 2.3 },
];
const FeedbackBarHandler = () => {
  return <FeedbackBar feedbackData={feedbackData} />;
};

export default FeedbackBarHandler;

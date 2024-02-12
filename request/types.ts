export type Course = {
  coursename: string;
  requestedby: string;
  requesteddate: string;
  approvedby: string;
  approveddate: string;
  remainingseats: number;
};

export type NominationRequestCardProps = {
  courses: Course[];
  isRejectModalOpen: boolean;
  rejectionReason: string;
  handleRejectClick: (index: number) => void;
  handleRejectClose: () => void;
  handleRejectionReasonChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleApproveClick: (index: number) => void;
  handleApproveAllClick: () => void;
  approvedCourses: Course[];
  handleRejectSubmit: (index: number) => void;
  rejectedCourses: Course[];
  index: number;
  isSubmitDisabled: boolean;
};

export type NominationAndRequestData = {
  type: string;
  count: number;
};

export type NominationAndRequestDataProps = {
  nominationAndRequestData: NominationAndRequestData[];
};

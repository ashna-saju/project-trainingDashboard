import React, { useState } from "react";
import NominationRequestCard from "./NominationRequestCard";
import { Course } from "./types";

const NominationRequestCardHandler = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      coursename: "Foundation of Cybersecurity",
      requestedby: "roshan",
      requesteddate: "03/01/2024",
      approvedby: "Jordan",
      approveddate: "04/01/2024",
      remainingseats: 10,
    },
    {
      coursename: "Foundation of Ai",
      requestedby: "roshan",
      requesteddate: "03/01/2024",
      approvedby: "Jordan",
      approveddate: "04/01/2024",
      remainingseats: 10,
    },
    {
      coursename: "Foundation of Datascience",
      requestedby: "roshan",
      requesteddate: "03/01/2024",
      approvedby: "Jordan",
      approveddate: "04/01/2024",
      remainingseats: 10,
    },
    {
      coursename: "Foundation of Cybersecurity",
      requestedby: "roshan",
      requesteddate: "03/01/2024",
      approvedby: "Jordan",
      approveddate: "05/01/2024",
      remainingseats: 10,
    },
    {
      coursename: "Foundation of Ai",
      requestedby: "roshan",
      requesteddate: "03/01/2024",
      approvedby: "Jordan",
      approveddate: "05/01/2024",
      remainingseats: 10,
    },
    {
      coursename: "Foundation of Datascience",
      requestedby: "roshan",
      requesteddate: "03/01/2024",
      approvedby: "Jordan",
      approveddate: "04/01/2024",
      remainingseats: 10,
    },
  ]);

  const [approvedCourses, setApprovedCourses] = useState<Course[]>([]);
  const [rejectedCourses, setRejectedCourses] = useState<Course[]>([]);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [selectedCourseIndex, setSelectedCourseIndex] = useState<number | null>(
    null
  );
  const isSubmitDisabled = rejectionReason.trim() === "";

  let rejectIndex!: number;
  const handleRejectClick = (index: number) => {
    setRejectModalOpen(true);
    setSelectedCourseIndex(index);
    rejectIndex = index;
  };

  const handleRejectClose = () => {
    setRejectModalOpen(false);
    setSelectedCourseIndex(null);
    setRejectionReason("");
  };

  const handleRejectSubmit = () => {
    if (selectedCourseIndex !== null) {
      setCourses((prevCourses) => {
        const updatedCourses = [...prevCourses];
        const rejectedCourse = updatedCourses.splice(selectedCourseIndex, 1)[0];
        setRejectedCourses((prevRejectedCourses) => [
          ...prevRejectedCourses,
          rejectedCourse,
        ]);
        return updatedCourses;
      });

      console.log("Rejected Courses Index:", selectedCourseIndex);
    }

    handleRejectClose();
  };

  const handleRejectionReasonChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRejectionReason(event.target.value);
  };

  const handleApproveClick = (index: number) => {
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      const approvedCourse = updatedCourses.splice(index, 1)[0];
      setApprovedCourses((prevApprovedCourses) => [
        ...prevApprovedCourses,
        approvedCourse,
      ]);
      return updatedCourses;
    });
  };

  const handleApproveAllClick = () => {
    setApprovedCourses((prevApprovedCourses) => [
      ...prevApprovedCourses,
      ...courses.map((course, index) => ({ ...course, index })),
    ]);
    setCourses([]);

    console.log("Approved Courses:", approvedCourses);
  };

  return (
    <div>
      <NominationRequestCard
        courses={courses}
        approvedCourses={approvedCourses}
        rejectedCourses={rejectedCourses}
        isRejectModalOpen={isRejectModalOpen}
        rejectionReason={rejectionReason}
        handleRejectClick={handleRejectClick}
        handleRejectClose={handleRejectClose}
        handleRejectionReasonChange={handleRejectionReasonChange}
        handleApproveClick={handleApproveClick}
        handleApproveAllClick={handleApproveAllClick}
        handleRejectSubmit={handleRejectSubmit}
        index={rejectIndex}
        isSubmitDisabled={isSubmitDisabled}
      />
    </div>
  );
};

export default NominationRequestCardHandler;

import { TouchEventHandler, useRef, useState } from "react";
import {
  Modal,
  Button,
  Typography,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FormHandler from "./FormHandler";
import { Question } from "../types";

const FormViewer = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < fromTemplateDataFromApi.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= 1 ? prevIndex - 1 : prevIndex
    );
  };

  const handleSwipeStart: TouchEventHandler<HTMLDivElement> = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleSwipeEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      handlePrevious();
    } else if (deltaX < -50) {
      handleNext();
    }

    touchStartX.current = null;
  };

  const fromTemplateDataFromApi: Question[][] = [
    [
      {
        question: "How satisfied are you with the training materials?",
        type: "radio",
        options: [
          "Very satisfied",
          "Satisfied",
          "Neutral",
          "Dissatisfied",
          "Very dissatisfied",
        ],
        required: true,
      },
      {
        question: "What aspects of the training did you find most helpful?",
        type: "text",
        options: [],
        required: false,
      },
    ],
    [
      {
        question:
          "How clear were the explanations provided in the training videos?",
        type: "radio",
        options: [
          "Very clear",
          "Clear",
          "Somewhat clear",
          "Unclear",
          "Very unclear",
        ],
        required: true,
      },
      {
        question: "Is there any topic you wish was covered more extensively?",
        type: "text",
        options: [],
        required: false,
      },
      {
        question: "Is there any topic you wish was covered more extensively?",
        type: "text",
        options: [],
        required: false,
      },
    ],
  ];

  function handleTemplateSelected(index: number): void {
    alert(`selected${index}`);
    handleClose();
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{ textTransform: "capitalize" }}
      >
        Choose Template
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh" }}
        >
          <Grid item xs={11} sm={8} md={6}>
            <div onTouchStart={handleSwipeStart} onTouchEnd={handleSwipeEnd}>
              <Box
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                  padding: "10px",
                  boxSizing: "border-box",
                  scrollbarWidth: "none",
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={0} sm={1}>
                    <IconButton
                      onClick={handlePrevious}
                      disabled={currentIndex <= 0}
                      sx={{
                        display: { xs: "none", sm: "block" },
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h6" component="h2" m={2}>
                      Form Question {currentIndex + 1}
                    </Typography>
                    <Box
                      onClick={() => handleTemplateSelected(currentIndex)}
                      overflow="auto"
                      height="80vh"
                      sx={{
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                      }}
                    >
                      <Box sx={{ pointerEvents: "none" }}>
                        <FormHandler
                          formData={fromTemplateDataFromApi[currentIndex]}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={0} sm={1}>
                    <IconButton
                      onClick={handleNext}
                      disabled={
                        currentIndex >= fromTemplateDataFromApi.length - 1
                      }
                      sx={{
                        display: { xs: "none", sm: "block" },
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default FormViewer;

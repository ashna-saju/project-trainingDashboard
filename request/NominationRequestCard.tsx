import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { NominationRequestCardProps } from "./types";

const NominationRequestCard = ({
  courses,
  isRejectModalOpen,
  rejectionReason,
  handleRejectClick,
  handleRejectClose,
  handleRejectionReasonChange,
  handleApproveClick,
  handleApproveAllClick,
  handleRejectSubmit,
  index,
  isSubmitDisabled,
}: NominationRequestCardProps) => {
  return (
    <>
      <Box sx={{ ml: { xs: 1, sm: "5rem" } }}>
        <Grid container sx={{ textAlign: "center", pb: "16px", mt: "1rem" }}>
          <Grid item xs={12} md={1.8}></Grid>{" "}
          <Hidden mdDown>
            <Grid item md={1.5}>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Requested By
              </Typography>
            </Grid>
            <Grid item md={1.6}>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Requested Date
              </Typography>
            </Grid>
            <Grid item md={1.2}>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Approved By
              </Typography>
            </Grid>
            <Grid item md={1.7}>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Approved Date
              </Typography>
            </Grid>
            <Grid item md={1.5}>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Remaining Seats
              </Typography>
            </Grid>
          </Hidden>
          <Grid item md={2.4} sx={{ pl: "4.3%" }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                "&:focus": { outline: "none" },
                "&:active": { boxShadow: "none" },
                textTransform: "capitalize",
              }}
              onClick={handleApproveAllClick}
            >
              Approve All
            </Button>
          </Grid>
        </Grid>
      </Box>

      {courses.length === 0 ? (
        <Box sx={{ ml: { xs: 1, sm: "5rem" }, textAlign: "center" }}>
          <Typography variant="caption" color="grey" sx={{ mt: "2rem" }}>
            No pending nominations.
          </Typography>
        </Box>
      ) : (
        courses.map((element, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.13)",
              mb: ".6rem",
              mx: { xs: "1.6rem", sm: "2.5rem", md: "3rem", lg: "1rem" },
            }}
          >
            <CardContent sx={{ mb: "-.5rem", backgroundColor: "#fcfcfc" }}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={12} md={2.6} sx={{ pl: { xs: 2, md: 0 } }}>
                  <Typography variant="caption">
                    {element.coursename}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PersonOutlineOutlinedIcon
                    fontSize="small"
                    sx={{ marginRight: "6px", color: "#545659" }}
                  />
                  <Typography variant="caption">
                    {element.requestedby}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DateRangeIcon
                    fontSize="small"
                    sx={{ marginRight: "6px", color: "#545659" }}
                  />
                  <Typography variant="caption">
                    {element.requesteddate}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={0.92}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PersonOutlineOutlinedIcon
                    fontSize="small"
                    sx={{ marginRight: "6px", color: "#545659" }}
                  />
                  <Typography variant="caption">
                    {element.approvedby}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={1.85}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DateRangeIcon
                    fontSize="small"
                    sx={{ marginRight: "6px", color: "#545659" }}
                  />
                  <Typography variant="caption">
                    {element.approveddate}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={1.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#26ea9c",
                  }}
                >
                  <Typography variant="caption">
                    {element.remainingseats}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={1.1} sx={{ pr: "2%" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      "&:focus": { outline: "none" },
                      "&:active": { boxShadow: "none" },
                      textTransform: "capitalize",
                    }}
                    onClick={() => handleApproveClick(index)}
                  >
                    Approve
                  </Button>
                </Grid>

                <Grid item xs={6} md={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleRejectClick(index)}
                    sx={{
                      "&:focus": { outline: "none" },
                      "&:active": { boxShadow: "none" },
                      textTransform: "capitalize",
                    }}
                  >
                    Reject
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      )}
      <Dialog
        open={isRejectModalOpen}
        onClose={handleRejectClose}
        maxWidth="xs"
        fullWidth
        sx={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          "& .MuiDialogTitle-root": {
            padding: "16px",
            borderBottom: "1px solid #ccc",
          },
          "& .MuiDialogContent-root": {
            padding: "16px",
          },
          "& .MuiDialogActions-root": {
            padding: "16px",
            borderTop: "1px solid #ccc",
            justifyContent: "flex-end",
          },
        }}
      >
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            value={rejectionReason}
            multiline
            onChange={handleRejectionReasonChange}
            sx={{ padding: "1rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRejectClose} color="primary">
            Close
          </Button>
          <Button
            onClick={() => handleRejectSubmit(index)}
            color="primary"
            variant="contained"
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NominationRequestCard;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Popover, MenuItem } from "@mui/material";
import { PersonOutlineOutlined as TrainerIcon } from "@mui/icons-material";
import {
  DateRange as CalendarIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import { ProgramListCardProps } from "./types";
const ProgramListCard = ({
  programData,
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
  open,
}: ProgramListCardProps) => {
  return (
    <>
      <Grid
        container
        sx={{ textAlign: "left", pb: "16px", mt: "1rem", marginTop: "2rem" }}
      >
        <Grid item xs={2.5}>
          <Typography variant="subtitle2" fontWeight="bold">
            Training Program
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography variant="subtitle2" fontWeight="bold">
            Trainer Name
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" fontWeight="bold">
            Start Date
          </Typography>
        </Grid>
        <Grid item xs={1.7}>
          <Typography variant="subtitle2" fontWeight="bold">
            End Date
          </Typography>
        </Grid>
        <Grid item xs={1.7}>
          <Typography variant="subtitle2" fontWeight="bold">
            Attendees
          </Typography>
        </Grid>
        <Grid item xs={1.3}>
          <Typography variant="subtitle2" fontWeight="bold">
            Available seats
          </Typography>
        </Grid>
      </Grid>

      {/* Render training program list */}
      {programData.map((course, index) => (
        <Card
          key={index}
          sx={{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
            mb: ".6rem",
            backgroundColor: "#fcfcfc",
            height: "3.5rem",
            position: "relative",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        >
          <CardContent>
            <Grid container alignItems="center">
              <Grid item xs={2.3} display={"flex"}>
                <Typography variant="caption">{course.trainingName}</Typography>
              </Grid>
              <Grid item xs={2.5} display={"flex"}>
                <TrainerIcon
                  fontSize="small"
                  sx={{ marginRight: "6px", color: "#545659" }}
                />
                <Typography variant="caption">{course.trainerName}</Typography>
              </Grid>

              <Grid item xs={2} display={"flex"}>
                <CalendarIcon
                  fontSize="small"
                  sx={{ marginRight: "6px", color: "#545659" }}
                />
                <Typography variant="caption">{course.startDate}</Typography>
              </Grid>
              <Grid item xs={2} display={"flex"}>
                <CalendarIcon
                  fontSize="small"
                  sx={{ marginRight: "6px", color: "#545659" }}
                />
                <Typography variant="caption">{course.endDate}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="caption">
                  {course.targetAudience}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="caption">
                  {course.numberOfSeats}
                  {"  seats"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <IconButton
            aria-label="more"
            aria-haspopup="true"
            onClick={handlePopoverOpen}
            style={{ position: "absolute", top: "0.5rem", right: 0 }}
          >
            <MoreIcon />
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <MenuItem onClick={handlePopoverClose}>
              <Typography variant="caption">Attendance</Typography>
            </MenuItem>
            <MenuItem onClick={handlePopoverClose}>
              <Typography variant="caption">Edit Trainings</Typography>
            </MenuItem>
            <MenuItem onClick={handlePopoverClose}>
              <Typography variant="caption">View Nominations</Typography>
            </MenuItem>
          </Popover>
        </Card>
      ))}
    </>
  );
};

export default ProgramListCard;

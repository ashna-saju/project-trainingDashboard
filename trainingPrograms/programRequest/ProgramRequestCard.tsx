import { Card, Grid, Typography, Button, Collapse } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
type TargetAudience = {
  name: string;
};

type Trainer = {
  trainerType: string;
  fullname: string;
};

type ProgramAudience = {
  audienceId: number;
  TargetAudience: TargetAudience;
};

type ProgramTrainer = {
  trainerId: number;
  Trainer: Trainer;
};

type TrainingProgram = {
  title: string;
  description: string;
  trainingMode: string;
  startDate: string;
  endDate: string;
  duration: number;
  availableSeats: number;
  occuranceType: string;
  occuranceInterval: number;
  status: string;
  trainingType: string;
  ProgramAudiences: ProgramAudience[];
  ProgramTrainers: ProgramTrainer[];
};

const ProgramRequestCard = ({
  trainingProgram,
  open,
  handlePopoverOpen,
  handlePopoverClose,
}: {
  trainingProgram: TrainingProgram;
  open: boolean;
  handlePopoverOpen: () => void;
  handlePopoverClose: () => void;
}) => {
  return (
    <Card
      sx={{
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.13)",
        mb: ".6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
        p: "1rem 2rem ",
      }}
    >
      <Grid container alignItems="center">
        <Grid
          item
          xs={3}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography variant="subtitle2">{trainingProgram.title} </Typography>
        </Grid>
        <Grid
          item
          xs={1.5}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <DateRangeIcon
            fontSize="small"
            sx={{ marginRight: "6px", color: "#545659" }}
          />
          <Typography variant="caption">{trainingProgram.startDate}</Typography>
        </Grid>
        <Grid
          item
          xs={1.5}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <DateRangeIcon
            fontSize="small"
            sx={{ marginRight: "6px", color: "#545659" }}
          />
          <Typography variant="caption">{trainingProgram.endDate}</Typography>
        </Grid>

        <Grid item xs={4} display="flex" justifyContent={"center"}>
          <Typography variant="caption">
            {trainingProgram.ProgramAudiences.map(
              (audience) => audience.TargetAudience.name
            ).join(", ")}
          </Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography variant="caption">
            {trainingProgram.availableSeats}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Button>Request</Button>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Description</Typography>
                <Typography variant="caption">
                  {trainingProgram.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Trainer</Typography>
                <Typography variant="caption">
                  {trainingProgram.ProgramTrainers.map(
                    (trainer) => trainer.Trainer.fullname
                  ).join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">Mode</Typography>
                <Typography variant="caption">
                  {trainingProgram.trainingMode}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">Occurance Type</Typography>
                <Typography variant="caption">
                  {trainingProgram.occuranceType}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">Duration</Typography>
                <Typography variant="caption">
                  {trainingProgram.duration}
                </Typography>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProgramRequestCard;

import React, { FormEvent, useState, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  createTheme,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FormViewer from "../feedback/feedbackForm/FormViewer";

type AudienceProps = {
  id: number;
  targetAudience: string;
};

type TrainerProps = {
  id: number;
  trainer: string;
};

type TrainingTypeProps = {
  id: number;
  trainingType: string;
};

const ProgramForm = () => {
  const [targetAudience, setTargetAudience] = useState<string[]>([]);
  const [trainer, setTrainer] = useState<string[]>([]);
  const [form, setForm] = useState<Record<string, string>>({});
  const [sendFeedback, setSendFeedback] = useState<boolean>(true);

  const Audience: AudienceProps[] = [
    { id: 1, targetAudience: "orgwide" },
    { id: 2, targetAudience: "DU1" },
    { id: 3, targetAudience: "DU2" },
    { id: 4, targetAudience: "DU3" },
  ];

  const Trainer: TrainerProps[] = [
    { id: 1, trainer: "Suneesh Thampi" },
    { id: 2, trainer: "Lekshmi Ashokan" },
    { id: 3, trainer: "Shreya Haridas" },
    { id: 4, trainer: "Ashaar" },
  ];

  const TrainingType: TrainingTypeProps[] = [
    { id: 1, trainingType: "Technical" },
    { id: 2, trainingType: "Non-Technical" },
    { id: 3, trainingType: "Soft skill" },
  ];

  const theme = createTheme({
    components: {
      MuiRadio: {
        styleOverrides: {
          root: {
            "& .MuiSvgIcon-root": {
              fontSize: 12,
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontSize: "12px",
          },
        },
      },
    },
  });

  const handleDelete = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState((prev: string[]) =>
      prev.filter((option: string) => option !== value)
    );
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("feedback", sendFeedback.toString());
    const formDataEntries: [string, FormDataEntryValue][] = Array.from(
      formData.entries()
    );
    for (const [key, value] of formDataEntries) {
      setForm((prev) => ({ ...prev, [key]: value.toString() }));
    }
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <form style={{ margin: "0.5rem 1rem 1rem 1rem" }} onSubmit={submit}>
          <Typography variant="h5" fontWeight={"bold"}>
            Create Program
          </Typography>

          <Grid container spacing={5} mt={"0.01rem"}>
            <Grid item md={6} sm={12} xs={12}>
              <FormControl fullWidth required>
                <TextField
                  size="small"
                  name="title"
                  label="Training Title"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </FormControl>
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <FormControl fullWidth required>
                <TextField
                  type="date"
                  size="small"
                  name="startDate"
                  label="Start Date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ sx: { fontSize: "0.8rem" } }}
                  required
                />
              </FormControl>
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <FormControl fullWidth required>
                <TextField
                  type="date"
                  size="small"
                  name="endDate"
                  label="End Date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ sx: { fontSize: "0.8rem" } }}
                  required
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={"-0.4rem"}>
            <Grid item md={6} sm={12} xs={12}>
              <FormControl fullWidth required>
                <TextField
                  multiline
                  rows={3.5}
                  name="description"
                  label="Description"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </FormControl>
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                  <FormControl size="small" fullWidth required>
                    <TextField
                      select
                      name="trainingTypeId"
                      label="Training Type"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      size="small"
                      fullWidth
                    >
                      {TrainingType.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.trainingType}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      type="number"
                      size="small"
                      name="duration"
                      label="Duration"
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <FormControl size="small" fullWidth sx={{ mt: "1rem" }} required>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  Target Audience
                </Typography>
                <Select
                  multiple
                  name="targetAudienceId"
                  value={targetAudience}
                  onChange={(e: SelectChangeEvent<string[]>) => {
                    const selectedIds = e.target.value as string[];
                    setTargetAudience(selectedIds);
                  }}
                  renderValue={(selected: string[]) => (
                    <Box
                      style={{
                        overflowX: "auto",
                        overflowY: "hidden",
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      {selected.map((id: string) => (
                        <Chip
                          key={id}
                          label={
                            Audience.find(
                              (audience) => audience.id.toString() === id
                            )?.targetAudience
                          }
                          size="small"
                          onDelete={() => handleDelete(id, setTargetAudience)}
                          style={{ padding: "-0.5rem 0.5px" }}
                        />
                      ))}
                    </Box>
                  )}
                >
                  {Audience.map((option) => (
                    <MenuItem key={option.id} value={option.id.toString()}>
                      {option.targetAudience}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={"-1.2rem"}>
            <Grid item md={12} sm={12} xs={12}>
              <FormControl size="small" fullWidth required>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  Trainer
                </Typography>
                <Select
                  multiple
                  name="trainerId"
                  value={trainer}
                  onChange={(e: SelectChangeEvent<string[]>) => {
                    const selectedIds = e.target.value as string[];
                    setTrainer(selectedIds);
                  }}
                  renderValue={(selected: string[]) => (
                    <Box
                      style={{
                        overflowX: "auto",
                        overflowY: "hidden",
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      {selected.map((id) => (
                        <Chip
                          key={id}
                          label={
                            Trainer.find(
                              (trainer) => trainer.id.toString() === id
                            )?.trainer
                          }
                          size="small"
                          onDelete={() => handleDelete(id, setTrainer)}
                          style={{ padding: "-0.5rem 0.5px" }}
                        />
                      ))}
                    </Box>
                  )}
                >
                  {Trainer.map((option) => (
                    <MenuItem key={option.id} value={option.id.toString()}>
                      {option.trainer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={5} marginTop={"-1rem"}>
            <Grid item md={4} sm={12} xs={12}>
              <FormControl fullWidth>
                <TextField
                  type="number"
                  size="small"
                  name="availableSeats"
                  label="Available Seats"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </FormControl>
            </Grid>

            <Grid item md={2}></Grid>

            <Grid
              item
              md={4}
              sm={12}
              xs={12}
              mt={{ md: "-0.2rem", xs: "-4rem" }}
            >
              <FormControl fullWidth required>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  Training Mode
                </Typography>
                <RadioGroup
                  name="trainingMode"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                  }}
                >
                  <FormControlLabel
                    value="online"
                    control={<Radio />}
                    label="Online"
                  />
                  <FormControlLabel
                    value="offline"
                    control={<Radio />}
                    label="Offline"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={5} marginTop={"-1.2rem"}>
            <Grid item md={4} sm={12} xs={12}>
              <FormControl fullWidth>
                <TextField
                  type="number"
                  size="small"
                  name="occuranceInterval"
                  label="Occurrence Interval"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </FormControl>
            </Grid>

            <Grid item md={2}></Grid>

            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              mt={{ md: "-.2rem", xs: "-4rem" }}
            >
              <FormControl required>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  Occurrence Type
                </Typography>
                <RadioGroup
                  name="occuranceType"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="once"
                    control={<Radio />}
                    label="Once"
                  />
                  <FormControlLabel
                    value="daily"
                    control={<Radio />}
                    label="Daily"
                  />
                  <FormControlLabel
                    value="weekly"
                    control={<Radio />}
                    label="Weekly"
                  />
                  <FormControlLabel
                    value="monthly"
                    control={<Radio />}
                    label="Monthly"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={5} marginTop={"-.1rem"}>
            <Grid item md={4} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={sendFeedback}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSendFeedback(e.target.checked)
                    }
                  />
                }
                label="Send Feedback"
              />
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
              {sendFeedback && <FormViewer />}
            </Grid>

            <Grid item md={4} sm={12} xs={12} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="info"
                sx={{ width: "7rem" }}
                type="submit"
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </>
  );
};

export default ProgramForm;

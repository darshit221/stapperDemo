import AddIcon from "@mui/icons-material/Add";
import { TextField, Button, Box, Paper } from "@mui/material";

import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import CancelIcon from "@mui/icons-material/Cancel";

function EductionDetails() {
  const {
    control,
    watch,

    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    shouldUnregister: false,
    name: "Eductiondetails",
  });

  const close = {
    position: "absolute",
    right: -20,
    top: -20,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>EducationDetails</h2>
      <Button
        variant="contained"
        type="button"
        onClick={() => {
          append();
        }}
      >
        <AddIcon />
      </Button>
      Add New Experiece
      <Box m={2}>
        {fields.map((item, index) => {
          return (
            <Paper
              sx={{
                margin: "30px 0",
                padding: "20px",
                borderRadius: "10px",
                position: "relative",
              }}
              key={item.id}
            >
              <Button
                sx={close}
                type="button"
                variant="outline"
                onClick={() => remove(index)}
              >
                <CancelIcon />
              </Button>
              <Controller
                control={control}
                name={`Eductiondetails.${index}.course`}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Course"
                    variant="standard"
                    type="text"
                    {...field}
                    error={!!errors.Eductiondetails}
                    helperText={
                      errors.Eductiondetails &&
                      errors.Eductiondetails[index].course.message
                    }
                  />
                )}
              />
              <Controller
                control={control}
                name={`Eductiondetails.${index}.university`}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="University"
                    variant="standard"
                    type="text"
                    {...field}
                    error={!!errors.Eductiondetails}
                    helperText={
                      errors.Eductiondetails &&
                      errors.Eductiondetails[index].university.message
                    }
                  />
                )}
              />

              <Controller
                control={control}
                name={`Eductiondetails.${index}.passOn`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label=" PassOn"
                    type="date"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name={`Eductiondetails.${index}.grade`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Grade"
                    variant="standard"
                    type="text"
                    {...field}
                  />
                )}
              />
            </Paper>
          );
        })}
      </Box>
    </div>
  );
}

export default EductionDetails;

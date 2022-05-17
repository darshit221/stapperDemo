import AddIcon from "@mui/icons-material/Add";
import { TextField, Button, Box, Paper } from "@mui/material";

import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import CancelIcon from "@mui/icons-material/Cancel";
import "./style.css";

function ExperienceDetails() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    shouldUnregister: false,
    name: "Experiencedetails",
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
    <div className="center">
      <h2>ExperienceDetails</h2>
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
                name={`Experiencedetails.${index}.E_company`}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="company"
                    variant="standard"
                    type="text"
                    {...field}
                    error={!!errors.Experiencedetails}
                    helperText={
                      errors.Experiencedetails &&
                      errors.Experiencedetails[index].E_company.message
                    }
                  />
                )}
              />
              <Controller
                control={control}
                name={`Experiencedetails.${index}.E_designation`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Designation"
                    variant="standard"
                    type="text"
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name={`Experiencedetails.${index}.E_department`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Department"
                    variant="standard"
                    type="text"
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name={`Experiencedetails.${index}.E_ctc`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="CTC"
                    variant="standard"
                    type="text"
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name={`Experiencedetails.${index}.from`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label=" From"
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
                name={`Experiencedetails.${index}.To`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label=" To"
                    type="date"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
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

export default ExperienceDetails;

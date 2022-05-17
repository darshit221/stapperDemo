import { Container, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import "./style.css";
function Currentstatus() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="center">
      <h2>Current Status</h2>
      <Container>
        <Controller
          control={control}
          name="company"
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="company"
              variant="standard"
              type="text"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="designation"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Designation"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.designation)}
              helperText={errors.designation?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="department"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Department"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.department)}
              helperText={errors.department?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="ctc"
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="CTC"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.ctc)}
              helperText={errors.ctc?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="workingForm"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Working Form"
              type="date"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              {...field}
              error={Boolean(errors.workingForm)}
              helperText={errors.workingForm?.message}
            />
          )}
        />
      </Container>
    </div>
  );
}

export default Currentstatus;

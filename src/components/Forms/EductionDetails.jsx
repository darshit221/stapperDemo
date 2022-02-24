import AddIcon from "@mui/icons-material/Add";
import { TextField, Button, Box, Paper } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import React, { useState } from "react";

function EductionDetails() {
  const [count, setCount] = useState(0);

  const forms = [];

  const multipleFrom = (count) => {
    for (let i = 1; i <= count; i++) {
      forms.push(<EductionDetailsFrom />);
    }
  };
  multipleFrom(count);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Education Details</h2>
      <Button
        variant="contained"
        onClick={() => setCount((prevcount) => prevcount + 1)}
      >
        <AddIcon />
      </Button>
      Add New Experiece
      {forms.map((block, index) => (
        <div key={index}>{block}</div>
      ))}
    </div>
  );
}

export default EductionDetails;

const EductionDetailsFrom = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box
      sx={{
        width: "90%",
        margin: " 20px auto",
        align: "center",
      }}
    >
      <Paper variant="outlined" sx={{ padding: "30px", borderRadius: "30px" }}>
        <Controller
          control={control}
          name="course"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="course"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.course)}
              helperText={errors.course?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="university"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="university"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.university)}
              helperText={errors.university?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="passOn"
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label=" passOn"
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
          name="grade"
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Grade"
              variant="standard"
              type="number"
              {...field}
            />
          )}
        />
      </Paper>
    </Box>
  );
};

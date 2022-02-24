import AddIcon from "@mui/icons-material/Add";
import { TextField, Button, Box, Paper } from "@mui/material";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ExperienceDetails() {
  const [count, setCount] = useState(0);

  const forms = [];

  const multipleFrom = (count) => {
    for (let i = 1; i <= count; i++) {
      forms.push(<ExperieceDetailFrom />);
    }
  };
  multipleFrom(count);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>ExperienceDetails</h2>
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

export default ExperienceDetails;

const ExperieceDetailFrom = () => {
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
          name="E_company"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Company"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.E_company)}
              helperText={errors.E_company?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="E_designation"
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
          name="E_department"
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
          name="E_ctc"
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
          name="from"
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
          name="To"
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
    </Box>
  );
};

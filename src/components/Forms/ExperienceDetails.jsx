import AddIcon from "@mui/icons-material/Add";
import { TextField, Button, Box, Paper } from "@mui/material";
import { borderRadius } from "@mui/system";
import React, { useState } from "react";

function ExperienceDetails({ formdata, setdata }) {
  const [count, setCount] = useState(0);

  const forms = [];

  const multipleFrom = (count) => {
    for (let i = 1; i <= count; i++) {
      forms.push(<ExperieceDetailFrom formdata={formdata} setdata={setdata} />);
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

const ExperieceDetailFrom = ({ formdata, setdata }) => {
  const { company, E_designation, E_department, E_ctc, from, to } = formdata;
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...formdata, [name]: value });
  };

  return (
    <Box
      sx={{
        width: "90%",
        margin: " 20px auto",
        align: "center",
      }}
    >
      <Paper variant="outlined" sx={{ padding: "30px", borderRadius: "30px" }}>
        <TextField
          fullWidth
          id="standard-basic"
          label="company"
          type="text"
          variant="standard"
          name="company"
          value={company}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Designation"
          type="text"
          variant="standard"
          name="E_designation"
          value={E_designation}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Department"
          type="text"
          variant="standard"
          name="E_department"
          value={E_department}
          onChange={handlechange}
        />

        <TextField
          fullWidth
          id="standard-basic"
          label="CTC"
          variant="standard"
          type="number"
          name="E_ctc"
          value={E_ctc}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label=" from"
          variant="standard"
          type={"date"}
          InputLabelProps={{
            shrink: true,
          }}
          name="from"
          value={from}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="to"
          variant="standard"
          type={"date"}
          InputLabelProps={{
            shrink: true,
          }}
          name="to"
          value={to}
          onChange={handlechange}
        />
      </Paper>
    </Box>
  );
};

import AddIcon from "@mui/icons-material/Add";
import { TextField, Button, Box, Paper } from "@mui/material";

import React, { useState } from "react";

function EductionDetails({ formdata, setdata }) {
  const [count, setCount] = useState(0);

  const forms = [];

  const multipleFrom = (count) => {
    for (let i = 1; i <= count; i++) {
      forms.push(<EductionDetailsFrom formdata={formdata} setdata={setdata} />);
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

const EductionDetailsFrom = ({ formdata, setdata }) => {
  const { course, university, passOn, Grade } = formdata;
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
          label="course"
          type="text"
          variant="standard"
          name="course"
          value={course}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="university"
          type="text"
          variant="standard"
          name="university"
          value={university}
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
          name="passOn"
          value={passOn}
          onChange={handlechange}
        />

        <TextField
          fullWidth
          id="standard-basic"
          label="Grade"
          variant="standard"
          type="number"
          name="Grade"
          value={Grade}
          onChange={handlechange}
        />
      </Paper>
    </Box>
  );
};

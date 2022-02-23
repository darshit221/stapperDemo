import { Box, Container, InputLabel, TextField } from "@mui/material";
import React from "react";

function PersonaldetailsTwo({ formdata, setdata }) {
  const { year, month, skills } = formdata;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...formdata, [name]: value });
  };
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          <InputLabel htmlFor="input-with-icon-adornment">
            Profile picture
          </InputLabel>
          <TextField
            id="standard-basic"
            label="Profile Picture"
            variant="standard"
            type="file"
          />
        </InputLabel>
      </div>
      <InputLabel htmlFor="input-with-icon-adornment">
        Total Experience
      </InputLabel>
      <Box>
        <TextField
          sx={{ width: "45%", marginRight: "50px" }}
          id="standard-basic"
          label="Year"
          variant="standard"
          type="number"
          name="year"
          value={year}
          onChange={handlechange}
        />
        <TextField
          sx={{ width: "45%" }}
          id="standard-basic"
          label="Month"
          type="number"
          variant="standard"
          name="month"
          value={month}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Skills"
          type="text"
          variant="standard"
          name="skills"
          value={skills}
          onChange={handlechange}
        />
      </Box>
    </Container>
  );
}

export default PersonaldetailsTwo;

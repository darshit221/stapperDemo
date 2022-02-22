import { Container, InputLabel, TextField } from "@mui/material";
import React from "react";

function PersonaldetailOne({ details }) {
  console.log();
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Personal Details</h2>
      <Container>
        <InputLabel htmlFor="input-with-icon-adornment">
          Profile picture
        </InputLabel>
        <TextField
          id="standard-basic"
          label="Profile Picture"
          variant="standard"
          type="file"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="First Name"
          variant="standard"
          type="text"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Last Name"
          type="text"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Birth Date"
          type="date"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Phone Number"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          variant="standard"
        />
      </Container>
    </div>
  );
}

export default PersonaldetailOne;

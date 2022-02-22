import { Box, Container, InputLabel, TextField } from "@mui/material";
import React from "react";

function PersonaldetailsTwo() {
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
        />
        <TextField
          sx={{ width: "45%" }}
          id="standard-basic"
          label="Month"
          type="number"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Skills"
          type="text"
          variant="standard"
        />
      </Box>
    </Container>
  );
}

export default PersonaldetailsTwo;

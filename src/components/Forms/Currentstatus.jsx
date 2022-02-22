import React from "react";
import { Container, InputLabel, TextField } from "@mui/material";

function Currentstatus() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Current Status</h2>
      <Container>
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          type="text"
          value="Albiorix Technology Private Limited"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Designation"
          type="text"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Department"
          type="text"
          variant="standard"
        />

        <TextField
          fullWidth
          id="standard-basic"
          label="CTC"
          variant="standard"
          type="number"
          minRows={0}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Working from"
          variant="standard"
          type={"date"}
        />
        <button type="submit">submit</button>
      </Container>
    </div>
  );
}

export default Currentstatus;

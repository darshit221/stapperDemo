import React from "react";
import { Container, InputLabel, TextField } from "@mui/material";

function Currentstatus({ formdata, setdata }) {
  const { designation, department, ctc, workingForm } = formdata;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...formdata, [name]: value });
  };
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
          name="designation"
          value={designation}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Department"
          type="text"
          variant="standard"
          name="department"
          value={department}
          onChange={handlechange}
        />

        <TextField
          fullWidth
          id="standard-basic"
          label="CTC"
          variant="standard"
          type="number"
          name="ctc"
          value={ctc}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Working from"
          variant="standard"
          type={"date"}
          InputLabelProps={{
            shrink: true,
          }}
          name="workingForm"
          value={workingForm}
          onChange={handlechange}
        />
      </Container>
    </div>
  );
}

export default Currentstatus;

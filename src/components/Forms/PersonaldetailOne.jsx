import { Container, InputLabel, TextField } from "@mui/material";
import { useFormik } from "formik";

import React from "react";
import { useForm } from "react-hook-form";

function PersonaldetailOne({ formdata, setdata }) {
  const { firstName, lastName, dob, phone, email } = formdata;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...formdata, [name]: value });
  };

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
          name="firstName"
          value={firstName}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Last Name"
          type="text"
          variant="standard"
          name="lastName"
          value={lastName}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Birth Date"
          type="date"
          variant="standard"
          name="dob"
          value={dob}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          name="phone"
          value={phone}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          value={email}
          onChange={handlechange}
        />
      </Container>
    </div>
  );
}

export default PersonaldetailOne;

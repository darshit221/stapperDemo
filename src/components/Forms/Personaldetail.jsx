import React from "react";
import { Container, InputLabel, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import "./style.css";

function PersonalDetail() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="center">
      <h2>Personal Details</h2>
      <Container>
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
        <Controller
          control={control}
          name="firstName"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="First Name"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="last Name"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="dob"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Birth Date"
              type="date"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              {...field}
              error={Boolean(errors.dob)}
              helperText={errors.dob?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          rules={{
            required: "Either phone or email is required",
            maxLength: {
              value: 10,
              message: "Invalid",
            },
            minLength: {
              value: 10,
              message: "Invalid",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid",
            },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Invalid",
            },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Email"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          )}
        />
      </Container>
    </div>
  );
}

export default PersonalDetail;

import { Container, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./style.css";
function BankDetails() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="center">
      <h2>Bank Details</h2>
      <Container>
        <Controller
          control={control}
          name="accountNumber"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="AccountNumber"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.accountNumber)}
              helperText={errors.accountNumber?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="ifsc"
          rules={{ required: "required" }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="IFSC"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.ifsc)}
              helperText={errors.ifsc?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="panCard"
          rules={{
            required: "required",
            maxLength: {
              value: 10,
              message: "Invalid",
            },
            minLength: {
              value: 10,
              message: "Invalid",
            },
            pattern: {
              value: /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/,
              message: "Invalid",
            },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Pan Number"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.panCard)}
              helperText={errors.panCard?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="adharCard"
          rules={{
            required: "required",
            maxLength: {
              value: 12,
              message: "Invalid",
            },
            minLength: {
              value: 12,
              message: "Invalid",
            },
            pattern: {
              value: /^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/,
              message: "Invalid",
            },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="standard-basic"
              label="Adhar Card Number"
              variant="standard"
              type="text"
              {...field}
              error={Boolean(errors.adharCard)}
              helperText={errors.adharCard?.message}
            />
          )}
        />
      </Container>
    </div>
  );
}

export default BankDetails;

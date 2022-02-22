import { Container, InputLabel, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
function Bankdtails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Bank Details</h2>
      <Container>
        <TextField
          fullWidth
          id="standard-basic"
          label="AccountNumber"
          variant="standard"
          type="text"
          {...register("AccountNumber", {
            required: "Required",
          })}
          error={Boolean(errors.AccountNumber)}
          helperText={errors.AccountNumber?.message}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="IFSC"
          type="text"
          variant="standard"
          {...register("IFSC", {
            required: " Required",
          })}
          error={Boolean(errors.IFSC)}
          helperText={errors.IFSC?.message}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Pan Card Number"
          variant="standard"
          {...register("PanCardNumber", {
            required: "Required",
            minLength: {
              value: 10,
              message: "invalid",
            },
            pattern: {
              value: /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/,
              message: "invalid",
            },
            maxLength: {
              value: 10,
              message: "invalid",
            },
          })}
          error={Boolean(errors.PanCardNumber)}
          helperText={errors.PanCardNumber?.message}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Adhaar Card Number"
          variant="standard"
          {...register("AdhaarCardNumber", {
            required: "Required",
            minLength: {
              value: 12,
              message: "invalid",
            },
            pattern: {
              value: /^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/,
              message: "invalid",
            },
            maxLength: {
              value: 12,
              message: "invalid",
            },
          })}
          error={Boolean(errors.AdhaarCardNumber)}
          helperText={errors.AdhaarCardNumber?.message}
        />
      </Container>
    </div>
  );
}

export default Bankdtails;

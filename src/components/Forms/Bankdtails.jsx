import { Container, InputLabel, TextField } from "@mui/material";
import React from "react";

function Bankdtails({ formdata, setdata }) {
  const { accountNumber, ifsc, panCard, adharCard } = formdata;
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...formdata, [name]: value });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Bank Details</h2>
      <Container>
        <TextField
          fullWidth
          id="standard-basic"
          label="AccountNumber"
          variant="standard"
          name="accountNumber"
          value={accountNumber}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="IFSC"
          type="text"
          variant="standard"
          name="ifsc"
          value={ifsc}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Pan Card Number"
          variant="standard"
          name="panCard"
          value={panCard}
          onChange={handlechange}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Adhaar Card Number"
          variant="standard"
          name="adharCard"
          value={adharCard}
          onChange={handlechange}
        />
      </Container>
    </div>
  );
}

export default Bankdtails;

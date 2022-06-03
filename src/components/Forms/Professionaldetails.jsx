import { Box, Container, InputLabel, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTheme } from "@mui/material/styles";

import OutlinedInput from "@mui/material/OutlinedInput";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import "./style.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const skill = [
  "javascript",
  "java",
  "React js",
  "Angular js",
  "Vue js",
  "Node js",
  "Express",
  "Dgajango",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Professionaldetails() {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setValue("skills", value);
  };
  return (
    <Container>
      <div className="center">
        <h2>Professional Details</h2>

        <InputLabel htmlFor="input-with-icon-adornment">
          <InputLabel htmlFor="input-with-icon-adornment">Resume</InputLabel>
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
        <Controller
          control={control}
          name="year"
          render={({ field }) => (
            <TextField
              sx={{ width: "45%", marginRight: "50px" }}
              id="standard-basic"
              label="Year"
              variant="standard"
              type="number"
              {...field}
              error={Boolean(errors.year)}
              helperText={errors.year?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="month"
          render={({ field }) => (
            <TextField
              sx={{ width: "45%" }}
              id="standard-basic"
              label="Month"
              variant="standard"
              type="number"
              {...field}
              error={Boolean(errors.month)}
              helperText={errors.month?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="skills"
          render={() => (
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-multiple-chip-label" variant="standard">
                Chip
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                label="Standard"
                variant="standard"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {skill.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Box>
    </Container>
  );
}

export default Professionaldetails;

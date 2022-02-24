import {
  Button,
  Container,
  Grid,
  Item,
  Paper,
  TextField,
  Typography,
  DataGrid,
  Table,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import UserTable from "./UserTable";

function Home() {
  return (
    <div>
      <Container>
        <Paper>
          <Typography variant="h6" align="center">
            Albiorix Technology Team
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid md={4}>
              <Box
                sx={{
                  margin: "10px",
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField label="search" />
              </Box>
            </Grid>
            <Grid md={3} align="center">
              <Link to="/employee-form">
                <Button variant="contained">Add</Button>
              </Link>
            </Grid>
          </Grid>

          <UserTable />
        </Paper>
      </Container>
    </div>
  );
}

export default Home;

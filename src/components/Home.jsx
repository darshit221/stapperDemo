import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";

import { deleteUser, selectDetails } from "./redux/actionCreator";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 18px;
  }

  th {
    background-color: #ddd;
  }
`;
function Home() {
  const dispatch = useDispatch();
  const { employess } = useSelector((state) => state);

  const [filteredData, setFilteredData] = useState(employess);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    result = filteredData.filter((data) => {
      return data.firstName.search(value) !== -1;
    });
    setFilteredData(result);
  };

  const selectdataHandler = (employee) => {
    dispatch(selectDetails(employee));
  };
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
                <TextField
                  label="search here"
                  onChange={(event) => handleSearch(event)}
                />
              </Box>
            </Grid>
            <Grid md={3} align="center">
              <Link to="/employee-form" style={{ textDecoration: "none" }}>
                <Button variant="contained">Add</Button>
              </Link>
            </Grid>
          </Grid>

          <Root>
            <table aria-label="custom pagination table">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {employess.map((value) => {
                  const { id, firstName, designation, department } = value;
                  return (
                    <tr key={id}>
                      <td>{firstName}</td>
                      <td>{designation}</td>
                      <td>{department}</td>
                      <td>
                        <Link to="/employee-form">
                          <Button onClick={() => selectdataHandler(value)}>
                            <EditIcon />
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button onClick={() => dispatch(deleteUser(id))}>
                          <DeleteIcon />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Root>
        </Paper>
      </Container>
    </div>
  );
}

export default Home;

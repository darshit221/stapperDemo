import * as React from "react";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { selectDetails } from "./redux/actionCreator";

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

export default function UserTable() {
  const dispatch = useDispatch();
  const { employess } = useSelector((state) => state);
  console.log("employess", employess);
  const updateHandler = (employee) => {
    dispatch(selectDetails(employee));
  };

  return (
    <div>
      <Root>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Name </th>
              <th>Designation</th>
              <th>Department</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            {employess.map((value) => {
              const { firstName, lastName, designation, department } = value;
              return (
                <tr>
                  <td>
                    {firstName} {lastName}
                  </td>
                  <td>{designation}</td>
                  <td>{department}</td>
                  <td>
                    <Button onClick={() => updateHandler(value)}>
                      <EditIcon />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Root>
    </div>
  );
}

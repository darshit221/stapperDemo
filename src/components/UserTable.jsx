import * as React from "react";
import { styled } from "@mui/system";

import { useSelector } from "react-redux";

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
  const { employess } = useSelector((state) => state);
  console.log("employess", employess);

  return (
    <div>
      <Root>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Name </th>
              <th>Designation</th>
              <th>Department</th>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </Root>
    </div>
  );
}

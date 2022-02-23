import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
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
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <Root>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Name </th>
            <th>Designation</th>
            <th>Department</th>
          </tr>
        </thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tbody></tbody>
      </table>
    </Root>
  );
}

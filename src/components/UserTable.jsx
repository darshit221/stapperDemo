import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";

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

const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }
`;

export default function UserTable() {
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

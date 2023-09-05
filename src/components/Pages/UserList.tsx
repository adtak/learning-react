import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Template from "./Template";

const rows: GridRowsProp = Array.from({ length: 100 }, (_, i) => {
  return { id: i, col1: "AAAAA", col2: "AAAAA", col3: "AAAAA", col4: "AAAAA" };
});

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 200 },
  { field: "col2", headerName: "Column 2", width: 200 },
  { field: "col3", headerName: "Column 3", width: 200 },
  { field: "col4", headerName: "Column 4", width: 200 },
];

export default function UserList() {
  return (
    <>
      <Template title="UserList">
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Template>
    </>
  );
}

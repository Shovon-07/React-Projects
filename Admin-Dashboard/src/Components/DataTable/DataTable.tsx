import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";

//___ CSS ___//
import "./DataTable.scss";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    console.log(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/images/view.svg" alt="" />
          </Link>
          <div
            className="delete"
            onClick={() => {
              handleDelete(params.row.id);
            }}
          >
            <img src="/images/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="DataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;

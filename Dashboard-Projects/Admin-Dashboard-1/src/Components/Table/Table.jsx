import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ModalPage from "../Modal/ModalPage";

//___ Css ___//
import "./Table.scss";

const Table = (props) => {
  const { slug, columns, rows } = props;

  return (
    <div className="Table">
      <div
        className="d-flex"
        style={{ marginBottom: "20px", justifyContent: "space-between" }}
      >
        <h3 className="title">{slug + "s"}</h3>
        <ModalPage slug={slug} inputFields={columns} />
      </div>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={[...columns]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20]}
          checkboxSelection
          disableColumnFilter
          disableColumnSelector
          disableRowSelectionOnClick
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </div>
  );
};

export default Table;

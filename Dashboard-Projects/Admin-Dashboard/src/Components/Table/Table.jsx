import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

//___ Css ___//
import "./Table.scss";

const Table = (props) => {
  // const actionColumn: GridColDef = {
  //   field: "action",
  //   headerName: "Actions",
  //   width: 200,
  //   renderCell: (params) => {
  //     return (
  //       <div className="action">
  //         <Link to={`/${props.slug}/${params.row.id}`}>
  //           <img src="/images/view.svg" alt="" />
  //         </Link>
  //         <div
  //           className="delete"
  //           onClick={() => {
  //             handleDelete(params.row.id);
  //           }}
  //         >
  //           <img src="/images/delete.svg" alt="" />
  //         </div>
  //       </div>
  //     );
  //   },
  // };

  return (
    <div className="Table">
      <h3 className="title">{props.slug}</h3>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={props.rows}
          columns={[...props.columns]}
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

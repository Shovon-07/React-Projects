import React, { useState } from "react";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

//___ CSS ___//
import "./Product.scss";

//___ Data ___//
import { products } from "../../Data.ts";

//___ Components ___//
import DataTable from "../../Components/DataTable/DataTable";
import Add from "../../Components/Add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || "/images/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    headerName: "Product title",
    width: 150,
    type: "string",
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 150,
    type: "string",
  },
  { field: "price", headerName: "Price", width: 150, type: "number" },
  { field: "createdAt", headerName: "Created at", width: 150, type: "string" },
  {
    field: "inStock",
    headerName: "Stock",
    type: "boolean",
    width: 110,
  },
];

const Product = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Product">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add new product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Product;

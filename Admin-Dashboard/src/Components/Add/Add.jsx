import React from "react";

//___ CSS ___//
import "./Add.scss";

// type Props = {
//   slug:string;
//   columns:import("@mui/x-data-grid").GridColDef[];
//   setOpen:React.Dispatch<React.SetStateAction<boolean>>;
// }

const Add = (props) => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new item
    // axios.post(`/api/${slug}`);
  };

  return (
    <div className="Add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field != "id" && item.field != "image")
            .map((column) => {
              return (
                <div className="item">
                  <label>{column.headerName}</label>
                  <input type={column.type} placeholder={column.field} />
                </div>
              );
            })}
          <button>CONFIRM</button>
        </form>
      </div>
    </div>
  );
};

export default Add;

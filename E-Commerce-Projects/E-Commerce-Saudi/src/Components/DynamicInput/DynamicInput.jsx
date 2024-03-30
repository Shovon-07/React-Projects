// import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
// const rows = [
//   createData("Item", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const DynamicInput = () => {
//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ fontSize: "17px" }}>Item</TableCell>
//               <TableCell align="right" style={{ fontSize: "17px" }}>
//                 Cost
//               </TableCell>
//               <TableCell align="right" style={{ fontSize: "17px" }}>
//                 Qty
//               </TableCell>
//               <TableCell align="right" style={{ fontSize: "17px" }}>
//                 Price
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.name}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>{" "}
//     </>
//   );
// };

// export default DynamicInput;

import React, { useState } from "react";

//___ Css ___//
import "./DynamicInput.scss";

const DynamicInput = () => {
  const [sectionCounter, setSectionCounter] = useState([1]);

  const handelSectionCounter = () => {
    setSectionCounter([...sectionCounter, 1]);
  };

  const handelRemoveSection = (sectionCounter) => {
    alert(sectionCounter);
    // const removed = sectionCounter.filter((sectionCounter) => {
    //   sectionCounter !== index;
    // });
    // setSectionCounter(removed);
  };

  return (
    <>
      {sectionCounter}
      {sectionCounter.map((item, index) => {
        return (
          <div className="DynamicInput d-flex flex-start gap-20" key={index}>
            <div>
              <p className="title">Item</p>
              <select>
                <option value="" defaultChecked>
                  Bank account
                </option>
                <option value="">Paypal</option>
                <option value="">Credit/Debit Card</option>
                <option value="">UPI Transfer</option>
              </select>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Item information"
              ></textarea>
            </div>
            <div>
              <p className="title">Cost</p>
              <input type="text" placeholder="00" />
              <p>Discount: 0% 0% 0%</p>
            </div>
            <div>
              <p className="title">Qty</p>
              <input type="text" placeholder="1" />
            </div>
            <div>
              <p className="title">Price</p>
              <p>$24.00</p>
            </div>
            <div className="cross cursor">
              <span onClick={() => handelRemoveSection(sectionCounter)}>X</span>
            </div>
          </div>
        );
      })}
      {/* <div className="DynamicInput d-flex flex-start gap-20">
        <div>
          <p className="title">Item</p>
          <select>
            <option value="" defaultChecked>
              Bank account
            </option>
            <option value="">Paypal</option>
            <option value="">Credit/Debit Card</option>
            <option value="">UPI Transfer</option>
          </select>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Item information"
          ></textarea>
        </div>
        <div>
          <p className="title">Cost</p>
          <input type="text" placeholder="00" />
          <p>Discount: 0% 0% 0%</p>
        </div>
        <div>
          <p className="title">Qty</p>
          <input type="text" placeholder="1" />
        </div>
        <div>
          <p className="title">Price</p>
          <p>$24.00</p>
        </div>
        <div className="cross cursor">
          <span>X</span>
        </div>
      </div> */}

      <div>
        <button className="button" onClick={handelSectionCounter}>
          Add Item
        </button>
      </div>
      {/* {(() => {
        for (let i = 1; i <= 10; i += 1) {
          const p = <p>sex</p>;
          return p;
        }
      })()} */}
    </>
  );
};

export default DynamicInput;

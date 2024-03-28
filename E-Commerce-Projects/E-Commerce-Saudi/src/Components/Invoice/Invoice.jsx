import React from "react";

//___ Images ___//
import Logo from "/images/icons/Company_orrange.png";

//___ Css ___//
import "./Invoice.scss";

const Invoice = () => {
  return (
    <>
      <div className="Invoice d-flex flex-start gap-20">
        <div className="left">
          <div className="first d-flex flex-start gap-20">
            <div>
              <img src={Logo} alt="" className="logo" />
              <p>
                Office 149, 450 South Brand Brooklyn San Diego County, CA 91905,
                USA
              </p>
              <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
            </div>
            <div>
              <div className="d-flex ">
                <h2>Invoice #</h2> <input type="text" value={1233} disabled />
              </div>
            </div>
          </div>
        </div>
        <div className="right">2</div>
      </div>
    </>
  );
};

export default Invoice;

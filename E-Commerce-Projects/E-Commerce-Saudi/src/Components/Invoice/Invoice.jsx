import React from "react";

//___ Images ___//
import Logo from "/images/icons/Company_orrange.png";

//___ Css ___//
import "./Invoice.scss";

const Invoice = () => {
  return (
    <>
      <div className="Invoice">
        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left">
            <div className="firstTop d-flex gap-20">
              <div className="left">
                <img src={Logo} alt="" className="logo" />
                <p>
                  Office 149, 450 South Brand Brooklyn San Diego County, CA
                  91905, USA
                </p>
                <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
              </div>
              <div className="right d-flex">2</div>
            </div>
          </div>
          <div className="right">2</div>
        </div>

        <div className="invoiceSection second d-flex gap-20">
          <div className="left">
            <div className="firstTop d-flex gap-20">
              <div className="left">1</div>
              <div className="right d-flex">2</div>
            </div>
          </div>
          <div className="right">2</div>
        </div>
      </div>
    </>
  );
};

export default Invoice;

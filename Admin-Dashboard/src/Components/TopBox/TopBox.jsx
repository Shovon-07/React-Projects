import React from "react";

//___ CSS ___//
import "./TopBox.scss";

//___ Components ___//
import { topDealUsers } from "../../Data.ts";

const TopBox = () => {
  return (
    <div className="TopBox">
      <h2>Top Deals</h2>
      <div className="list">
        {topDealUsers.map((user) => {
          return (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userTxt">
                  <span className="userName">{user.username}</span>
                  <span className="userEmail">{user.email}</span>
                </div>
              </div>
              <span className="amount">${user.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBox;

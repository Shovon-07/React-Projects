import React, { useState } from "react";

//___ Images ___//
import NotifyImg from "/images/users/web-page.jpg";

//___ Css ___//
import "./Notification.scss";

//___ Data ___//
import { notificationData } from "../../Data";

const Notification = () => {
  return (
    <div className="Notification d-flex" onClick={() => alert("Notification")}>
      {notificationData.map((items, index) => {
        return (
          <div className="notification-item d-flex" key={index}>
            <div>
              <img src={items.notificationImg} alt="notify img" />
            </div>
            <div>
              {/* <h4>{String(items.notificationTitle).substr(0, 10)}...</h4> */}
              <h4>
                {String(items.notificationTitle).length > 25
                  ? String(items.notificationTitle).substr(0, 25) + "..."
                  : String(items.notificationTitle)}
              </h4>
              <p>
                {String(items.notificationMsg).length > 75
                  ? String(items.notificationMsg).substr(0, 75) + "..."
                  : String(items.notificationMsg)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;

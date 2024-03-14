import React from "react";

//___ Images ___//
import NotifyImg from "/images/users/web-page.jpg";

//___ Css ___//
import "./Notification.scss";

const Notification = () => {
  return (
    <div className="Notification d-flex" onClick={() => alert("Notification")}>
      <div className="notification-item d-flex">
        <img src={NotifyImg} alt="" />
        <h4>I'll buy a I phone 10x mobile...</h4>
      </div>
      <div className="notification-item d-flex">
        <img src={NotifyImg} alt="" />
        <h4>I'll buy a I phone 10x mobile...</h4>
      </div>
      <div className="notification-item d-flex">
        <img src={NotifyImg} alt="" />
        <h4>I'll buy a I phone 10x mobile...</h4>
      </div>
      <div className="notification-item d-flex">
        <img src={NotifyImg} alt="" />
        <h4>I'll buy a I phone 10x mobile...</h4>
      </div>
      <div className="notification-item d-flex">
        <img src={NotifyImg} alt="" />
        <h4>I'll buy a I phone 10x mobile...</h4>
      </div>
    </div>
  );
};

export default Notification;

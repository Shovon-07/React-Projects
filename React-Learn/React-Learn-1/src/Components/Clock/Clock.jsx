import React, { useEffect } from "react";

const Clock = () => {
  const time = () => {
    return new Date().toLocaleTimeString();
  };

  useEffect(() => {
    time();
  }, []);

  return <div>{time}</div>;
};

export default Clock;

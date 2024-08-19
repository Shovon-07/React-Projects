import React from "react";

const MemoTitle = ({ title }) => {
  console.log(title);

  return <h1>{title}</h1>;
};

export default React.memo(MemoTitle);

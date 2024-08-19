import React from "react";

const MemoCount = ({ title, counter }) => {
  console.log(`Rendering ${title} : ${counter}`);

  return (
    <div>
      <p>
        {title} : {counter}
      </p>
    </div>
  );
};

export default React.memo(MemoCount);
// export default MemoCount;

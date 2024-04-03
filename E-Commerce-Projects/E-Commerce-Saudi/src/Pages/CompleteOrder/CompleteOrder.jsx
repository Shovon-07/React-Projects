import React, { useEffect } from "react";
import AxiosConfig from "../../assets/AxiosConfig";

const CompleteOrder = () => {
  const { http } = AxiosConfig();

  const handlePost = () => {
    http.post("/create", { data: "Shovon sexy" }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      CompleteOrder
      {/* <div id="viewCaptured"></div> */}
      <button className="button" onClick={handlePost}>
        POST
      </button>
      <img src="" alt="" />
    </div>
  );
};

export default CompleteOrder;

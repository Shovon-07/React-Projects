import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCall = ({ api }) => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    try {
      let res = await axios.get(api);
      setApiData(res.data);
      // setFilteredApiData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return <></>;
};

export default ApiCall;

import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
const KEY = process.env.REACT_APP_PIXABAY_KEY;

const App = () => {
  const URL = `https://pixabay.com/api/?key=${KEY}`;
  const [data, setData] = useState([]);

  const fetchResults = () => {
    axios
      .get(URL)
      .then(res => {
        console.log("RES: ", res);
        setData(res.data.hits);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return <div>{data.length > 0 ? "DATA RECIEVED" : "NOT YET"}</div>;
};

export default App;

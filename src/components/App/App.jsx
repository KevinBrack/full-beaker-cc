import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import InputForm from "../InputForm/InputForm";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
const KEY = process.env.REACT_APP_PIXABAY_KEY;

const App = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState("&q=puppies");

  useEffect(() => {
    const URL = `https://pixabay.com/api/?key=${KEY}${params}`;
    const fetchResults = () => {
      axios
        .get(URL)
        .then(res => {
          setData(res.data.hits);
        })
        .catch(err => console.log(err));
    };
    fetchResults();
    return;
  }, [params]);

  return (
    <div>
      <h1>{data.length > 0 ? "DATA RECIEVED" : "NOT YET"}</h1>
      <h2>params: {params}</h2>
      <InputForm setParams={setParams} />
      <ImageDisplay data={data} />
    </div>
  );
};

export default App;

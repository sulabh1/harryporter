import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Data from "./components/Data";
//import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/characters", {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((data) => {
        const datas = data.data.characters;
        setData(datas);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  //console.log(data);

  return (
    <div>
      {/* {console.log(data)} */}
      <Navbar />

      <Content />
      {data.map((el) => {
        console.log(el);
        return <Data name={el.name} house={el.house} image={el.image} />;
      })}
    </div>
  );
};

export default App;

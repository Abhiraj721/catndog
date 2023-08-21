import "./styles.css";
import Navbar from "./Navbar";
import Content from "./Content";
import dog from "./Group 2.png";
import dog2 from "./Group.png";
import { useState, useEffect } from "react";
import React from "react";
export default function App() {
  const [img, Setimg] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      changeimg();
    }, 2000);
  }, [img]);
  const changeimg = () => {
    Setimg(!img);
  };
  return (
    <div className="App">
      <Navbar />
      <Content />
      <div
        className="dog"
        style={{ background: `url(${img == true ? dog : dog2}` }}
      ></div>
      <p
        style={{
          position: "relative",
          left: "74px",
          color: "white",
          top: "123px"
        }}
      >
        hello <span>{img == true ? "code" : "world"}</span>
      </p>
    </div>
  );
}

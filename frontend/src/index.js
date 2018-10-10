import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <div>
    {" "}
    <div class="preloader">
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube" />
        <div class="sk-cube2 sk-cube" />
        <div class="sk-cube4 sk-cube" />
        <div class="sk-cube3 sk-cube" />
      </div>
    </div>
    <App />
  </div>,
  document.getElementById("root")
);

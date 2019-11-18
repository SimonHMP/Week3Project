import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Boxes from "./components/boxes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="HorizontalScroller">
          <Boxes id="box1" />
          <Boxes id="box2" />
          <Boxes id="box3" />
        </div>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div>
      <h1 className="title"> Pomodoro Clock</h1>
      <Timer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Timer.css";

import { connect } from "react-redux";

import RestTimer from "./RestTimer";
import FocusTimer from "./FocusTimer";
import ButtonControl from "./ButtonControl/ButtonControl";

const Timer = (props) => {
  const { fcs } = props;
  let min, sec;

  let [counter, setCounter] = useState(fcs * 60);

  const handleTime = () => {
    setInterval(() => {
      setCounter((pS) => pS - 1);
    }, 1000);
  }; //handles start counter

  const handleStop = () => {};

  const clockify = () => {
    let mins = Math.floor(counter / 60);
    let secs = counter - mins * 60;
    min = mins < 10 ? "0" + mins : mins;
    sec = secs < 10 ? "0" + secs : secs;
    return min + " : " + sec;
  }; //displays timer

  return (
    <div>
      <div className="controls">
        <RestTimer />
        <FocusTimer />
      </div>
      <div className="container">
        {" "}
        <div className="time">
          <h1>{clockify()}</h1>
        </div>
        <div className="btnControl">
          <ButtonControl startTime={handleTime} stop={handleStop} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    fcs: state.fcsTimer,
  };
};
export default connect(mapStateToProps)(Timer);

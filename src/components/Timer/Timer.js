import React, { useState } from "react";
import "./Timer.css";

import { connect } from "react-redux";

import RestTimer from "./RestTimer";
import FocusTimer from "./FocusTimer";
import ButtonControl from "./ButtonControl/ButtonControl";

const Timer = (props) => {
  const { ct } = props;
  let count, mins, secs, min, sec;

  count = ct * 60;
  let [timer, setTimer] = useState(count);

  const handleTime = () => {
    timer = count / 60;
    setInterval(() => {
      setTimer({ timer: timer - 1 });
    }, 1000);
  }; //countdown play btn

  const clockify = () => {
    mins = Math.floor(timer / 60);
    secs = timer - mins * 60;
    min = mins < 10 ? "0" + mins : mins;
    sec = secs < 10 ? "0" + secs : secs;
    console.log(min);
    console.log(sec);
    return min + " : " + sec;
  }; //display countdown handle

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
          <ButtonControl startTime={handleTime} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    fcs: state.fcsTimer,
    ct: state.counter,
  };
};
export default connect(mapStateToProps)(Timer);

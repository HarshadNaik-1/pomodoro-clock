import React from "react";
import "./ButtonControl.css";

import { PlayArrow, Stop, RotateLeft } from "@material-ui/icons";

const ButtonControl = (props) => {
  return (
    <div className="btn">
      <button onClick={props.startTime}>
        {" "}
        <PlayArrow />
      </button>
      <button onClick={props.stop}>
        {" "}
        <Stop />
      </button>

      <button>
        {" "}
        <RotateLeft />
      </button>
    </div>
  );
};

export default ButtonControl;

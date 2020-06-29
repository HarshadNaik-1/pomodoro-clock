import React from "react";
import { connect } from "react-redux";

export const CountTimer = (props) => {
  const { ct } = props;
  return (
    <div>
      <h1>{ct}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ct: state.counter,
  };
};

export default connect(mapStateToProps)(CountTimer);

import React from "react";
import "./Timer.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

import { ArrowUpwardOutlined, ArrowDownwardOutlined } from "@material-ui/icons";

const RestTimer = (props) => {
  const { rst, onRestPlus, onRestMinus } = props;
  return (
    <div className="Rest">
      <ArrowDownwardOutlined onClick={onRestMinus} style={{ fontSize: 30 }} />
      <h2>{rst}</h2>
      <ArrowUpwardOutlined onClick={onRestPlus} style={{ fontSize: 30 }} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    rst: state.rstTimer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRestPlus: () => dispatch(actionCreators.restPlus()),
    onRestMinus: () => dispatch(actionCreators.restMinus()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RestTimer);

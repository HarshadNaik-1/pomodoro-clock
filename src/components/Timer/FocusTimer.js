import React from "react";
import "./Timer.css";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

import { ArrowUpwardOutlined, ArrowDownwardOutlined } from "@material-ui/icons";

export const FocusTimer = (props) => {
  const { fcs, onFocusMinus, onFocusPlus } = props;
  return (
    <div className="Focus">
      <ArrowDownwardOutlined onClick={onFocusMinus} style={{ fontSize: 30 }} />
      <h2>{fcs}</h2>
      <ArrowUpwardOutlined onClick={onFocusPlus} style={{ fontSize: 30 }} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fcs: state.fcsTimer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFocusPlus: () => dispatch(actionCreators.focusPlus()),
    onFocusMinus: () => dispatch(actionCreators.focusMinus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FocusTimer);

import * as actionType from "./actions";

const initialState = {
  rstTimer: 5,
  fcsTimer: 25,
};

const pomo = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REST_PLUS:
      return {
        ...state,
        rstTimer: state.rstTimer + 1,
      };
    case actionType.REST_MINUS:
      return {
        ...state,
        rstTimer:
          state.rstTimer <= 1 ? (state.rstTimer = 1) : state.rstTimer - 1,
      };
    case actionType.FOCUS_PLUS:
      return {
        ...state,
        fcsTimer: state.fcsTimer + 1,
        // counter: state.fcsTimer + 1,
      };
    case actionType.FOCUS_MINUS:
      return {
        ...state,
        fcsTimer:
          state.fcsTimer <= 1 ? (state.fcsTimer = 1) : state.fcsTimer - 1,
        // counter:
        //   state.fcsTimer <= 1 ? (state.fcsTimer = 1) : state.fcsTimer - 1,
      };

    default:
      return state;
  }
};
export default pomo;

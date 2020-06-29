export const REST_PLUS = "REST_PLUS";
export const REST_MINUS = "REST_MINUS";
export const FOCUS_PLUS = "FOCUS_PLUS";
export const FOCUS_MINUS = "FOCUS_MINUS";
export const COUNTER = "COUNTER";

//Actions for Rest Timer
export const restPlus = () => {
  return {
    type: REST_PLUS,
  };
};
export const restMinus = () => {
  return {
    type: REST_MINUS,
  };
};

//Actions for Focus Timer & Counter Control
export const focusPlus = () => {
  return {
    type: FOCUS_PLUS,
  };
};

export const focusMinus = () => {
  return {
    type: FOCUS_MINUS,
  };
};

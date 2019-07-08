const LOCAL_STATE_NAMESPACE = "@@REDUX_CONNECTED_UI";

const createActionString = actionType =>
  `${LOCAL_STATE_NAMESPACE}-${actionType}`;

export const INITIALIZE_VALUES = createActionString("INITIALIZE_VALUES");
export const INITIALIZE_VALUE = createActionString("INITIALIZE_VALUE");
export const UPDATE_VALUE = createActionString("UPDATE_VALUE");
export const UPDATE_VALUES = createActionString("UPDATE_VALUES");
export const RESET_VALUE = createActionString("RESET_VALUE");
export const RESET_VALUES = createActionString("RESET_VALUES");
export const CLEAR_VALUE = createActionString("CLEAR_VALUE");
export const CLEAR_VALUES = createActionString("CLEAR_VALUES");

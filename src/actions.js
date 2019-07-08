import {
  INITIALIZE_VALUES,
  INITIALIZE_VALUE,
  UPDATE_VALUE,
  UPDATE_VALUES,
  RESET_VALUE,
  RESET_VALUES,
  CLEAR_VALUE,
  CLEAR_VALUES,
} from "./actionTypes";

const createAction = type => payload => ({
  type,
  payload,
});

export const initializeValues = createAction(INITIALIZE_VALUES);
export const initializeValue = createAction(INITIALIZE_VALUE);
export const updateValue = createAction(UPDATE_VALUE);
export const updateValues = createAction(UPDATE_VALUES);
export const resetValue = createAction(RESET_VALUE);
export const resetValues = createAction(RESET_VALUES);
export const clearValue = createAction(CLEAR_VALUE);
export const clearValues = createAction(CLEAR_VALUES);

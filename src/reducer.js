import {
  INITIALIZE_VALUES,
  INITIALIZE_VALUE,
  UPDATE_VALUE,
  UPDATE_VALUES,
  RESET_VALUE,
  RESET_VALUES,
} from "./actionTypes";

const defaultState = {};

const defaultValues = {};

const handlers = {
  [INITIALIZE_VALUES]: (state, { payload: { namespace, values } }) => ({
    ...state,
    [namespace]: {
      meta: {
        initialValues: values,
      },
      values,
    },
  }),
  [INITIALIZE_VALUE]: (state, { payload: { namespace, key, value } }) => {
    const currentInitialValues =
      state[namespace] && state[namespace].meta
        ? state[namespace].meta.initialValues
        : defaultValues;
    const currentValues =
      (state[namespace] && state[namespace].values) || defaultValues;
    return {
      ...state,
      [namespace]: {
        meta: {
          initialValues: {
            ...currentInitialValues,
            [key]: value,
          },
        },
        values: {
          ...currentValues,
          [key]: value,
        },
      },
    };
  },
  [UPDATE_VALUE]: (state, { payload: { namespace, key, value } }) => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      values: {
        ...state[namespace].values,
        [key]: value,
      },
    },
  }),
  [UPDATE_VALUES]: (state, { payload: { namespace, values } }) => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      values: {
        ...state[namespace].values,
        ...values,
      },
    },
  }),
  [RESET_VALUE]: (state, { payload: { namespace, key } }) => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      values: {
        ...state[namespace].values,
        [key]: state[namespace].meta.initialValues[key],
      },
    },
  }),
  [RESET_VALUES]: (state, { payload: { namespace } }) => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      values: state[namespace].meta.initialValues,
    },
  }),
};

export default (state = defaultState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};

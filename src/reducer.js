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
  // TODO: each component can only initialize its own value
  [INITIALIZE_VALUES]: (state, { payload: { nameSpace, values } }) => ({
    ...state,
    [nameSpace]: {
      meta: {
        initialValues: values,
      },
      values,
    },
  }),
  [INITIALIZE_VALUE]: (state, { payload: { nameSpace, key, value } }) => {
    const currentInitialValues =
      state[nameSpace] && state[nameSpace].meta
        ? state[nameSpace].meta.initialValues
        : defaultValues;
    const currentValues =
      (state[nameSpace] && state[nameSpace].values) || defaultValues;
    return {
      ...state,
      [nameSpace]: {
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
  [UPDATE_VALUE]: (state, { payload: { nameSpace, key, value } }) => ({
    ...state,
    [nameSpace]: {
      ...state[nameSpace],
      values: {
        ...state[nameSpace].values,
        [key]: value,
      },
    },
  }),
  [UPDATE_VALUES]: (state, { payload: { nameSpace, values } }) => ({
    ...state,
    [nameSpace]: {
      ...state[nameSpace],
      values: {
        ...state[nameSpace].values,
        ...values,
      },
    },
  }),
  [RESET_VALUE]: (state, { payload: { nameSpace, key } }) => ({
    ...state,
    [nameSpace]: {
      ...state[nameSpace],
      values: {
        ...state[nameSpace].values,
        [key]: state[nameSpace].meta.initialValues[key],
      },
    },
  }),
  [RESET_VALUES]: (state, { payload: { nameSpace } }) =>
    console.log(state[nameSpace]) || {
      ...state,
      [nameSpace]: {
        ...state[nameSpace],
        values: state[nameSpace].meta.initialValues,
      },
    },
};

export default (state = defaultState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};

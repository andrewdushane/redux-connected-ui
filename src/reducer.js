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
  [UPDATE_VALUE]: (state, { payload: { namespace, key, value } }) => {
    const currentValues =
      (state[namespace] && state[namespace].values) || defaultValues;
    return {
      ...state,
      [namespace]: {
        ...state[namespace],
        values: {
          ...currentValues,
          [key]: value,
        },
      },
    };
  },
  [UPDATE_VALUES]: (state, { payload: { namespace, values } }) => {
    const currentValues =
      (state[namespace] && state[namespace].values) || defaultValues;
    return {
      ...state,
      [namespace]: {
        ...state[namespace],
        values: {
          ...currentValues,
          ...values,
        },
      },
    };
  },
  [RESET_VALUE]: (state, { payload: { namespace, key } }) => {
    const currentValues =
      (state[namespace] && state[namespace].values) || defaultValues;
    const initialValues =
      (state[namespace] &&
        state[namespace].meta &&
        state[namespace].meta.initialValues) ||
      defaultValues;
    return {
      ...state,
      [namespace]: {
        ...state[namespace],
        values: {
          ...currentValues,
          [key]: initialValues[key],
        },
      },
    };
  },
  [RESET_VALUES]: (state, { payload: { namespace } }) => {
    const initialValues =
      (state[namespace] &&
        state[namespace].meta &&
        state[namespace].meta.initialValues) ||
      defaultValues;
    return {
      ...state,
      [namespace]: {
        ...state[namespace],
        values: initialValues,
      },
    };
  },
};

export default (state = defaultState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};

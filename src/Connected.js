import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  initializeValue as initializeValueAction,
  updateValue as updateValueAction,
  updateValues as updateValuesAction,
  resetValue as resetValueAction,
  resetValues as resetValuesAction,
  clearValue as clearValueAction,
} from "./actions";
import { defaultStoreLocation } from "./constants";

class Connected extends Component {
  componentWillMount() {
    this.props.initialize();
  }

  componentWillUnmount() {
    this.props.clearValue();
  }

  render() {
    const {
      children,
      updateValue,
      updateValues,
      resetValue,
      resetValues,
      handleInputChange,
      value,
    } = this.props;

    return (
      <Fragment>
        {children({
          updateValue,
          updateValues,
          resetValue,
          resetValues,
          handleInputChange,
          value,
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (storeLocation = defaultStoreLocation) => (
  state,
  { namespace, subscription, initialValue },
) => ({
  values: state[storeLocation][namespace]
    ? state[storeLocation][namespace].values
    : { [subscription]: initialValue },
});

const dispatchProps = {
  initializeValueAction,
  updateValueAction,
  updateValuesAction,
  resetValueAction,
  resetValuesAction,
  clearValueAction,
};

const mergeProps = (
  { values },
  {
    initializeValueAction,
    updateValueAction,
    updateValuesAction,
    resetValueAction,
    resetValuesAction,
    clearValueAction,
  },
  { initialValue, namespace, subscription, children },
) => ({
  initialize: () => {
    if (initialValue !== undefined) {
      initializeValueAction({
        namespace,
        key: subscription,
        value: initialValue,
      });
    }
  },
  updateValue: value => {
    updateValueAction({ namespace, key: subscription, value });
  },
  updateValues: updateFn => {
    updateValuesAction({ namespace, values: updateFn(values) });
  },
  resetValue: () => {
    resetValueAction({ namespace, key: subscription });
  },
  resetValues: () => {
    resetValuesAction({ namespace });
  },
  clearValue: () => {
    clearValueAction({ namespace, key: subscription });
  },
  handleInputChange: ({ target: { value } }) => {
    updateValueAction({ namespace, key: subscription, value });
  },
  value: values[subscription],
  children,
});

export const createConnected = storeLocation =>
  connect(
    mapStateToProps(storeLocation),
    dispatchProps,
    mergeProps,
  )(Connected);

export default createConnected();

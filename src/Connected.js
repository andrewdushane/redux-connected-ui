import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  initializeValue as initializeValueAction,
  updateValue as updateValueAction,
  updateValues as updateValuesAction,
  resetValue as resetValueAction,
  resetValues as resetValuesAction,
} from "./actions";
import { defaultStoreLocation } from "./constants";

class Connected extends Component {
  componentWillMount() {
    this.props.initialize();
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

const mapStateToProps = (
  state,
  {
    nameSpace,
    subscription,
    storeLocation = defaultStoreLocation,
    initialValue,
  },
) => ({
  values: state[storeLocation][nameSpace]
    ? state[storeLocation][nameSpace].values
    : { [subscription]: initialValue },
});

const dispatchProps = {
  initializeValueAction,
  updateValueAction,
  updateValuesAction,
  resetValueAction,
  resetValuesAction,
};

const mergeProps = (
  { values },
  {
    initializeValueAction,
    updateValueAction,
    updateValuesAction,
    resetValueAction,
    resetValuesAction,
  },
  { initialValue, nameSpace, subscription, children },
) => ({
  initialize: () => {
    initializeValueAction({
      nameSpace,
      key: subscription,
      value: initialValue,
    });
  },
  updateValue: value => {
    updateValueAction({ nameSpace, key: subscription, value });
  },
  updateValues: updateFn => {
    updateValuesAction({ nameSpace, values: updateFn(values) });
  },
  resetValue: () => {
    resetValueAction({ nameSpace, key: subscription });
  },
  resetValues: () => {
    resetValuesAction({ nameSpace });
  },
  handleInputChange: ({ target: { value } }) => {
    updateValueAction({ nameSpace, key: subscription, value });
  },
  value: values[subscription],
  children,
});

export default connect(mapStateToProps, dispatchProps, mergeProps)(Connected);

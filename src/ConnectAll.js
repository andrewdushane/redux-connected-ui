import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  initializeValues as initializeValuesAction,
  updateValues as updateValuesAction,
  resetValues as resetValuesAction,
} from "./actions";
import { defaultStoreLocation } from "./constants";

class ConnectAll extends Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    const { children, updateValues, resetValues, values } = this.props;

    return (
      <Fragment>
        {children({
          updateValues,
          resetValues,
          values,
        })}
      </Fragment>
    );
  }
}

const defaultInitialValues = {};

const mapStateToProps = (storeLocation = defaultStoreLocation) => (
  state,
  { namespace, initialValues = defaultInitialValues },
) => ({
  values: state[storeLocation][namespace]
    ? state[storeLocation][namespace].values
    : initialValues,
});

const dispatchProps = {
  initializeValuesAction,
  updateValuesAction,
  resetValuesAction,
};

const mergeProps = (
  { values },
  { initializeValuesAction, updateValuesAction, resetValuesAction },
  { initialValues, namespace, children },
) => ({
  initialize: () => {
    if (initialValues) {
      initializeValuesAction({
        namespace,
        values: initialValues,
      });
    }
  },
  updateValues: updateFn => {
    updateValuesAction({ namespace, values: updateFn(values) });
  },
  resetValues: () => {
    resetValuesAction({ namespace });
  },
  values,
  children,
});

export const createConnectAll = storeLocation =>
  connect(
    mapStateToProps(storeLocation),
    dispatchProps,
    mergeProps,
  )(ConnectAll);

export default createConnectAll();

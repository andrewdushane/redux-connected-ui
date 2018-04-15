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

const mapStateToProps = (
  state,
  {
    nameSpace,
    storeLocation = defaultStoreLocation,
    initialValues = defaultInitialValues,
  },
) => ({
  values: state[storeLocation][nameSpace]
    ? state[storeLocation][nameSpace].values
    : initialValues,
});

const dispatchProps = {
  initializeValuesAction,
  updateValuesAction,
  resetValuesAction,
};

const mergeProps = (
  { values },
  { initializesValueAction, updateValuesAction, resetValuesAction },
  { initialValues, nameSpace, children },
) => ({
  initialize: () => {
    initializeValuesAction({
      nameSpace,
      values: initialValues,
    });
  },
  updateValues: updateFn => {
    updateValuesAction({ nameSpace, values: updateFn(values) });
  },
  resetValues: () => {
    resetValuesAction({ nameSpace });
  },
  values,
  children,
});

export default connect(mapStateToProps, dispatchProps, mergeProps)(ConnectAll);

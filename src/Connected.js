// @flow

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

type CallbackProps = {
  updateValue: (value: any) => void,
  updateValues: (updateValuesFn: (values: Object) => Object) => void,
  resetValue: () => void,
  resetValues: () => void,
  handleInputChange: (event: SyntheticEvent<HTMLInputElement>) => void,
  value: any,
};

type InitializeProp = {
  initialize: () => void,
};

type ChildrenProp = {
  children: (computedProps: CallbackProps) => React$Element<any>,
};

type FinalInternalProps = CallbackProps & InitializeProp & ChildrenProp;

type ExternalProps = {
  nameSpace: string,
  subscription: string,
  storeLocation: string,
  initialValue: any,
};

type FinalExternalProps = ExternalProps & ChildrenProp;

class Connected extends Component<FinalInternalProps> {
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

const FinalConnected: (
  props: FinalExternalProps,
) => React$Element<any> = connect(mapStateToProps, dispatchProps, mergeProps)(
  Connected,
);

export default FinalConnected;

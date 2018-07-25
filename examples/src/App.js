import React, { Component } from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import { Connected, ConnectAll } from "redux-connected-ui";
import { ConnectedAtOtherUi, ConnectAllAtOtherUi } from "./OtherLocationConnect";

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div>
          <ConnectAll namespace="example">
            {({ values, updateValues, resetValues }) => (
              <div>
                <button onClick={resetValues}>Reset</button>
                <textarea
                  rows={10}
                  cols={50}
                  value={JSON.stringify(values, null, 2)}
                  onChange={({target: {value}}) => {
                    let newValues; 
                    try {
                      newValues = JSON.parse(value)
                    } catch (e) {
                      return
                    }
                    updateValues((currentValues) => ({...currentValues, ...newValues}));
                  }}
                ></textarea>
              </div>
            )}
          </ConnectAll>
          <Connected
            namespace="example"
            subscription="someTextInput"
            initialValue="wutz"
          >
            {({ value, handleInputChange }) => (
              <input
                value={value || ""}
                onChange={handleInputChange}
                name="foo-42"
              />
            )}
          </Connected>
          <Connected
            namespace="example"
            subscription="anotherTextInput"
            initialValue="wat"
          >
            {({ value, handleInputChange }) => (
              <input
                value={value || ""}
                onChange={handleInputChange}
                name="foo-7"
              />
            )}
          </Connected>
          <Connected
            namespace="example"
            subscription="bgColor"
            initialValue="red"
          >
            {({ value, updateValue }) => (
              <div
                style={{ height: 20, width: 20, backgroundColor: value }}
                onClick={() => {
                  updateValue(value === "red" ? "blue" : "red");
                }}
              />
            )}
          </Connected>
          <div style={{ break: "both", float: "none" }}>
            <ConnectedAtOtherUi
              namespace="another-ui"
              subscription="somethingElse"
              initialValue="blue"
            >
              {({ value, updateValue }) => (
                <div
                  style={{ height: 20, width: 20, backgroundColor: value }}
                  onClick={() => {
                    updateValue(value === "red" ? "blue" : "red");
                  }}
                />
              )}
            </ConnectedAtOtherUi>
          <ConnectAllAtOtherUi namespace="another-ui">
            {({ values, updateValues, resetValues }) => (
              <div>
                <button onClick={resetValues}>Reset</button>
                <textarea
                  rows={10}
                  cols={50}
                  value={JSON.stringify(values, null, 2)}
                  onChange={({target: {value}}) => {
                    let newValues; 
                    try {
                      newValues = JSON.parse(value)
                    } catch (e) {
                      return
                    }
                    updateValues((currentValues) => ({...currentValues, ...newValues}));
                  }}
                ></textarea>
              </div>
            )}
          </ConnectAllAtOtherUi>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

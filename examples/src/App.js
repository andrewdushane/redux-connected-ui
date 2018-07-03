import React, { Component } from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import { Connected, ConnectAll } from "redux-connected-ui";
import { ConnectedAtOtherUi } from "./OtherLocationConnect";

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div>
          <ConnectAll namespace="example">
            {({ resetValues }) => <button onClick={resetValues}>Reset</button>}
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
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

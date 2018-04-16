import React, { Component } from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import { Connected, ConnectAll } from "redux-connected-ui";

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div>
          <ConnectAll nameSpace="example">
            {({ resetValues }) => <button onClick={resetValues}>Reset</button>}
          </ConnectAll>
          <Connected
            nameSpace="example"
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
            nameSpace="example"
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
            nameSpace="example"
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
        </div>
      </Provider>
    );
  }
}

export default App;

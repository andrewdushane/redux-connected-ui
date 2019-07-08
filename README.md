# Redux Connected UI

## Purpose

Creating new state in Redux, using the standard methods - add an action type, add an action, add a reducer - can take a lot of typing. Sometimes we need local UI state in the redux store. The purpose of this library is to make keeping it there easier, and more specifically, to make `connect`ing to the store closer to the UI that needs to be connected, easier.

## Getting started

### Install

`npm install --save redux-connected-ui` or `yarn add redux-connected-ui`

Note that this library expects your project to include `react`, `react-redux` and `redux` already.

### Reducer

```javascript
// store.js
import { createStore, combineReducers } from "redux";
import { connectedReducer } from "redux-connected-ui";

const rootReducer = combineReducers({
  // redux-connected-ui expects to be at the "ui" key of your store
  // if you need to use a different key, see "Using a different key" below
  ui: connectedReducer,
  ...reducers, // your other reducers
});

const store = createStore(rootReducer);
```

[combineReducers docs](https://redux.js.org/api-reference/combinereducers)

### Using the `Connected` component

```javascript
// App.js
import React from "react";
import { Provider } from "react-redux";
// note typical redux apps only have one instance of `Provider` near the top of the component tree
// Provider doesn’t need to be added anywhere else for redux-connected-ui
import store from "./store";
import { Connected } from "redux-connected-ui";

const App = () => (
  <Provider store={store}>
    <div>
      <header>
        <h1>Awesome App</h1>
      </header>
      <main>
        <Connected
          namespace="example"
          subscription="boxColor"
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
        <Connected
          namespace="example"
          subscription="myTextInput"
          initialValue="wat"
        >
          {({ value, handleInputChange }) => (
            <input value={value} onChange={handleInputChange} name="foo-42" />
          )}
        </Connected>
      </main>
    </div>
  </Provider>
);
```

In this example, the values from the `Connected` components will be in the store at `state.ui.example.values`.

`state.ui.example.values.boxColor` -> "red"  
`state.ui.example.values.myTextInput` -> "wat"

## API

### `Connected`

#### Props

| Prop                 | Type                           | Required | Default   | Description                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------ | -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children             | (renderProps) => React Element | yes      | undefined | Children is a function that accepts the argument described below and returns a React element, typically would be JSX. The children function can be declared as nested JSX (as in the example above) or passed explicitly as `children` to `Connected` |
| namespace            | string                         | yes      | undefined | The namespace in which to read/write the subscribed key/value                                                                                                                                                                                         |
| subscription         | string                         | yes      | undefined | The key at which to read/write the subscribed value                                                                                                                                                                                                   |
| initialValue         | any                            | no       | undefined | The initial value for the subcribed key                                                                                                                                                                                                               |
| retainValueOnDestroy | boolean                        | no       | false     | Retain the current value when the rendered component unmounts. Value will be cleared by default.                                                                                                                                                      |

#### `children` prop render function argument

| Property          | Type                                                                   | Description                                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | any                                                                    | The current value of the component’s `subscription`                                                                                                                        |
| updateValue       | (newValue: any) => void                                                | Function accepts a single argument of the new value for the component’s subscription.                                                                                      |
| updateValues      | (updateFunction: (currentValues: Object) => newValues: Object) => void | Function accepts a single argument of a function that receives the current values of the component’s `namespace` and must return the entire new values for the `namespace` |
| resetValue        | () => void                                                             | Function restores the component’s `subscription` to its `initialValue` when invoked                                                                                        |
| resetValues       | () => void                                                             | Function restores all values in the component’s `namespace` to their `initialValue`                                                                                        |
| handleInputChange | (eventTarget: HtmlInputElement) => void                                | Value updater to be used specifically for HTML inputs. Updates the component’s `subscription` to `event.target.value`.                                                     |

### `ConnectAll`

#### Props

| Prop                  | Type                           | Required | Default   | Description                                                                                                                                                                                                                                            |
| --------------------- | ------------------------------ | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children              | (renderProps) => React Element | yes      | undefined | Children is a function that accepts the argument described below and returns a React element, typically would be JSX. The children function can be declared as nested JSX (as in the example above) or passed explicitly as `children` to `ConnectAll` |
| namespace             | string                         | yes      | undefined | The namespace to be subscribed to                                                                                                                                                                                                                      |
| initialValues         | Object                         | no       | undefined | The initial values for the subcribed namespace. Note that this should only be used if no `Connected` component sets any `initialValue` for the same namespace.                                                                                         |
| retainValuesOnDestroy | boolean                        | no       | false     | Retain the current values when the rendered component unmounts. Values will be cleared by default.                                                                                                                                                     |

#### `children` prop render function argument

| Property     | Type                                                                   | Description                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| values       | any                                                                    | The current values of the component’s `namespace`                                                                                                                          |
| updateValues | (updateFunction: (currentValues: Object) => newValues: Object) => void | Function accepts a single argument of a function that receives the current values of the component’s `namespace` and must return the entire new values for the `namespace` |
| resetValues  | () => void                                                             | Function restores all values in the component’s `namespace` to their `initialValue`                                                                                        |

## Using a different key

This library exports `createConnected` and `createConnectAll` functions for connecting UI at a store key other than "ui". Usage at "otherUi" is something like this:

```javascript
// MyConnectedComponents.js
import { createConnected, createConnectAll } from "redux-connected-ui";
const location = "otherUi";
export const ConnectedAtOtherUi = createConnected(location);
export const ConnectAllAtOtherUi = createConnectAll(location);
```

```javascript
// store.js
import { createStore, combineReducers } from "redux";
import { connectedReducer } from "redux-connected-ui";

const rootReducer = combineReducers({
  // redux-connected-ui expects to be at the "ui" key of your store
  // if you need to use a different key, see "Using a different key" below
  otherUi: connectedReducer,
  ...reducers, // your other reducers
});

const store = createStore(rootReducer);
```

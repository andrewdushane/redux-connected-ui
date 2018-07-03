import ConnectedModule, {
  createConnected as createConnectedModule,
} from "./Connected";
import ConnectAllModule, {
  createConnectAll as createConnectAllModule,
} from "./ConnectAll";
import connectedReducerModule from "./reducer";

export const Connected = ConnectedModule;
export const ConnectAll = ConnectAllModule;
export const createConnected = createConnectedModule;
export const createConnectAll = createConnectAllModule;
export const connectedReducer = connectedReducerModule;

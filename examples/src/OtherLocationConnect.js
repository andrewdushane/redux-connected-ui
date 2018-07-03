import { createConnected, createConnectAll } from "redux-connected-ui";

const location = "otherUi";

export const ConnectedAtOtherUi = createConnected(location);

export const ConnectAllAtOtherUi = createConnectAll(location);

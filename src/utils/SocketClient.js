import * as signalR from "@aspnet/signalr";
import * as urls from "./Urls";

let HubConnection;

export const eventNames = {
  playerJoinedGroup: "playerJoinedGroup",
  messageReceived: "messageReceived",
  gameEvents: "gameEvents",
  lobbyEvents: "lobbyEvents"
};

export const functionNames = {
  disconnectFromGroup: "disconnectFromGroup",
  sendMessageToGroup: "sendMessageToGroup",
  sendGameEvent: "sendGameEvent",
  startGame: "startGame",
  enterGameGroup: "enterGameGroup",
  getPlayersInGroup: "getPlayersInGroup",
  getGroups: "getGroups",
  login: "login"
};

export const unSubscribeFrom = (eventName, handler) => {
  verifyConnection(() => {
    HubConnection.off(eventName, handler);
  });
};

export const subscribeTo = (eventName, handler) => {
  verifyConnection(() => {
    HubConnection.on(eventName, handler);
  });
};

export const invoke = (
  functionName,
  args,
  onInvokeSuccesfull,
  onInvokeFailed
) => {
  //console.log("Invoking", functionName, HubConnection, "args", args);
  verifyConnection(() => {
    //console.log("Invoke", functionName, "on hubconnection");
    invokeHubconnection(functionName, args, onInvokeSuccesfull, onInvokeFailed);
  }, onInvokeFailed);
};

export const getInvoke = (functionName, args, onSucces, onFail) => {
  verifyConnection(() => {
    //console.log("GetInvoke", functionName, "on hubconnection");
    getInvokeOnConnection(functionName, args, onSucces, onFail);
  }, onFail);
};

export const verifyConnection = (onSuccess, onFail) => {
  //console.log("Verifying connection", onSuccess, onFail);
  if (!isConnected()) connectToServer(onSuccess, onFail);
  else {
    //console.log("verifyConnection - isConnected - calling success", onSuccess);
    if (onSuccess) onSuccess();
  }
};

const invokeHubconnection = (functionName, args, onSucces, onFail) => {
  console.log("invokeHubconnection - args", args);
  let promise = getPromise(functionName, args);
  console.log("invokeHubconnection - promise", promise);
  promise
    .then(() => {
      console.log("invokeHubconnection - promise then");
      onSucces && onSucces();
    })
    .catch(err => {
      console.log("invokeHubconnection - promise catch", err);
      onFail && onFail();
    });
};

const getPromise = (functionName, args) => {
  let promise = args
    ? HubConnection.invoke(functionName, args)
    : HubConnection.invoke(functionName);
  return promise;
};

const getInvokeOnConnection = (functionName, args, onSucces, onFail) => {
  console.log("getInvokeHubconnection - args", args);
  let promise = getPromise(functionName, args);
  //console.log("getInvokeHubconnection - promise", promise);
  promise
    .then(results => {
      console.log("getInvokeHubconnection - promise then, results: ", results);
      onSucces && onSucces(results);
    })
    .catch(err => {
      console.log("getInvokeHubconnection - promise catch", err);
      onFail && onFail();
    });
};

const isConnected = () => {
  let connected = HubConnection !== undefined && HubConnection.state === 1;
  //console.log("isConnected?", connected);
  return connected;
};

const connectToServer = (onSuccessFunction, onFailFunction) => {
  console.log("connectToServer", "connecting to server", urls.SOCKET_GAMEHUB);

  let hubConnection = HubConnection;
  if (!hubConnection) {
    hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(urls.SOCKET_GAMEHUB)
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }

  //console.log("connection", hubConnection);
  hubConnection
    //.start({ withCredentials: false })
    .start()
    .then(() => {
      console.log("Connection started!", hubConnection);
      HubConnection = hubConnection;
      onSuccessFunction && onSuccessFunction();
    })
    .catch(err => {
      console.log("Error while establishing connection,", err);
      onFailFunction && onFailFunction();
    });
};

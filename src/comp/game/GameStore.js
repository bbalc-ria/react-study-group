import * as client from "../../utils/SocketClient";
import { stat } from "fs";

let scoreRefreshCallback;
let refreshCallback;
let refreshMessageCallback;
let refreshRoundCallback;
let refreshCountCallback;
let refreshGameOverCallback;

let state = {
  questionSet: undefined,
  scores: undefined,
  correct: undefined,
  selected: undefined,
  round: 0,
  message: "",
  counter: "0",
  gameOver: false
};

export const resetState = () => {
  state = {
    questionSet: undefined,
    scores: undefined,
    correct: undefined,
    selected: undefined,
    round: 0,
    message: "",
    counter: "0",
    gameOver: false
  };
};

export const getGameOver = () => {
  return state.gameOver;
};

export const subscribe = () => {
  resetState();
  client.subscribeTo(client.eventNames.gameEvents, handleGameEvent);
};

export const unsubscribe = () => {
  resetState();
  client.unSubscribeFrom(client.eventNames.gameEvents, handleGameEvent);
};

const handleGameEvent = (eventName, eventArgs) => {
  // console.log("GAME - Received Event");
  if (eventName === "question") {
    //console.log("Received Event", eventName, eventArgs);
    handleQuestionSetReceived(eventArgs);
  } else if (eventName === "correctanswer") {
    //console.log("Received Event", eventName, eventArgs);
    handleCorrectAnswer(eventArgs);
  } else if (eventName === "players") {
    console.log("Received Event", eventName, eventArgs);
    handlePlayers(eventArgs);
  } else if (eventName === "gamestart") {
    handleCounterMessage("Game starting in:", eventArgs);
  } else if (eventName === "answerwait") {
    handleCounterMessage("Round ends in:", eventArgs);
  } else if (eventName === "roundend") {
    //console.log("Received Event", eventName, eventArgs);
    handleRoundEnd(eventArgs);
  } else if (eventName === "gameover") {
    handleGameOver(eventArgs);
  }
};

const handlePlayers = args => {
  let players = args;
  let scores = [];
  for (let index = 0; index < players.length; index++) {
    const element = players[index];
    scores.push({ player: element, score: 0 });
  }
  state.scores = scores;
  //console.log("handlePlayers - state:", state);
  publishScoreRefresh();
};

const handleRoundEnd = args => {
  let scores = args.scores;
  let correct = Number.parseInt(args.correct);
  state.correct = correct;
  state.scores = scores;
  publishRefresh();
  publishScoreRefresh();
};

const handleGameOver = args => {
  //console.log("GAMESTORE - handleGameOver - Handling Game Over");
  handleCounterMessage("Game over!", "");
  state.scores = args;
  state.gameOver = true;
  state.questionSet = undefined;
  state.correct = undefined;
  state.players = undefined;
  state.selected = undefined;
  state.round = 0;
  state.message = "";

  publishRefresh();
  publishGameOverRefresh();
};

const handleCounterMessage = (msg, count) => {
  handleMessage(msg);
  handleCounter(count);
};

const handleMessage = msg => {
  if (state.message !== msg) {
    state.message = msg;
    publishRefresh();
  }
};

const handleCounter = count => {
  state.counter = count;
  publishCountRefresh();
};

const handleQuestionSetReceived = args => {
  state.round++;
  state.questionSet = args;
  state.correct = undefined;
  state.selected = undefined;
  publishRefresh();
  publishRoundRefresh();
};

const handleCorrectAnswer = args => {
  state.correct = Number.parseInt(args.correct);
  state.selected = Number.parseInt(args.selected);
  publishRefresh();
};

const publishRoundRefresh = () => {
  refreshRoundCallback && refreshRoundCallback();
};

const publishGameOverRefresh = () => {
  refreshGameOverCallback && refreshGameOverCallback();
};

export const registerRefreshCallback = callback => {
  refreshCallback = callback;
};

export const removeRefreshCallback = () => {
  refreshCallback = undefined;
};

export const registerScoreRefreshCallback = callback => {
  scoreRefreshCallback = callback;
};

export const removeScoreRefreshCallback = () => {
  scoreRefreshCallback = undefined;
};

export const registerMessageRefreshCallback = callback => {
  refreshMessageCallback = callback;
};

export const unregisterMessageRefreshCallback = () => {
  refreshMessageCallback = undefined;
};

export const registerGameOverCallback = callback => {
  refreshGameOverCallback = callback;
};

export const unregisterGameOverCallback = () => {
  refreshGameOverCallback = undefined;
};

export const registerRoundRefreshCallback = callback => {
  refreshRoundCallback = callback;
};

export const unregisterRoundRefreshCallback = () => {
  refreshRoundCallback = undefined;
};

export const registerCounterRefreshCallback = callback => {
  refreshCountCallback = callback;
};

export const unregisterCounterRefreshCallback = () => {
  refreshCountCallback = undefined;
};

const publishRefresh = () => {
  //console.log("GAMESTORE - Publishing refresh state", state);
  refreshCallback && refreshCallback();
};

const publishScoreRefresh = () => {
  console.log("GAMESTORE - publishScoreRefresh state", state);
  scoreRefreshCallback && scoreRefreshCallback();
};

const publishMessageRefresh = () => {
  refreshMessageCallback && refreshMessageCallback();
};

const publishCountRefresh = () => {
  refreshCountCallback && refreshCountCallback(state.counter);
};

export const getRoundNb = () => {
  return state.round;
};

export const getRound = () => {
  //console.log("GAMESTORE - getRound state:", state);
  return {
    gameOver: false,
    questions: state.questionSet,
    scores: state.scores,
    correct: state.correct,
    selected: state.selected,
    message: state.message
  };
};

export const getMessageSet = () => {
  return { round: state.round, message: state.message, counter: state.counter };
};

export const selectAnswer = answer => {
  //state.selected = answer;
  //console.log("GAMESTORE - selectAnswer state:", state);

  client.invoke(
    client.functionNames.sendGameEvent,
    { name: "select", args: answer },
    () => {
      //      publishRefresh();
    }
  );
};

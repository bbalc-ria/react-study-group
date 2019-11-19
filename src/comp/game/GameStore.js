import * as client from "../../utils/SocketClient";
import { stat } from "fs";

let scoreRefreshCallback;
let refreshCallback;
let refreshMessageCallback;
let state = {
  questionSet: undefined,
  scores: undefined,
  correct: undefined,
  selected: undefined,
  round: 0,
  message: "",
  counter: "0"
};

const resetState = () => {
  state = {
    questionSet: undefined,
    scores: undefined,
    correct: undefined,
    selected: undefined,
    round: 0,
    message: "",
    counter: "0"
  };
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
  console.log("handlePlayers - state:", state);
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
  state.questionSet = undefined;
  state.correct = undefined;
  publishRefresh();
};

const handleCounterMessage = (msg, count) => {
  state.message = msg;
  state.counter = count;
  publishMessageRefresh();
};

const handleQuestionSetReceived = args => {
  state.round++;
  state.questionSet = args;
  state.correct = undefined;
  state.selected = undefined;
  publishRefresh();
  //publishMessageRefresh();
};

const handleCorrectAnswer = args => {
  state.correct = Number.parseInt(args.correct);
  state.selected = Number.parseInt(args.selected);
  publishRefresh();
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

export const getRound = () => {
  //console.log("GAMESTORE - getRound state:", state);
  return {
    questions: state.questionSet,
    scores: state.scores,
    correct: state.correct,
    selected: state.selected
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

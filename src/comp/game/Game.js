import React, { useState, useEffect } from "react";
import * as client from "../../utils/SocketClient";
import QuestionSet from "./questionSets/QuestionSets";
import GameScores from "./scores/Scores";
import * as S from "./GameStyles";

function Game({ setup, onExit }) {
  const [initialized, setInitialized] = useState(false);
  const [questionSet, setQuestionSet] = useState();

  // const [questionSet, setQuestionSet] = useState({
  //   question: "What is the name of the planet?",
  //   answers: ["Pluto", "Earth", "Mars", "Venus", "Moon"]
  // });

  const [correct, setCorrect] = useState();
  const [selected, setSelected] = useState();
  const [gameMessage, setGameMessage] = useState("Waiting to start.");
  const [scores, setScores] = useState();
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState("");
  const [round, setRound] = useState({
    questionSet: undefined,
    roundNumber: 0
  });

  useEffect(() => {
    console.log("Game - useEffetct");
    handleSubscribe();
    return handleUnSubScribe;
  }, []);

  const handleSubscribe = () => {
    console.log("Game - subscribing to events");
    client.subscribeTo(client.eventNames.gameEvents, handleGameEvent);
  };

  const handleUnSubScribe = () => {
    console.log("Game - unsubscribing from events");
    client.unSubscribeFrom(client.eventNames.gameEvents, handleGameEvent);
  };

  const handleCorrectAnswer = args => {
    console.log("Setting correct answer", args);
    let correctIndex = Number.parseInt(args);
    setCorrect(correctIndex);
  };

  const handleRoundEnd = args => {
    console.log("handleRoundEnd - args:", args);
    let scores = args.scores;
    setScores(scores);
    setCorrect(args.correct);
  };

  const handlePlayers = args => {
    console.log("handlePlayers - args:", args);
    let players = args;
    console.log("handlePlayers - players:", players);
    let scores = [];
    for (let index = 0; index < players.length; index++) {
      const element = players[index];
      scores.push({ player: element, score: 0 });
    }

    setScores(scores);
  };

  const handleGameEvent = (eventName, eventArgs) => {
    console.log("Received Event", eventName, eventArgs);
    if (eventName === "question") {
      let newRound = {
        roundNumber: round.roundNumber++,
        questionSet: eventArgs
      };
      console.log("New round", newRound);
      setRound(newRound);
      setSelected(undefined);
      setCorrect(undefined);
      //setQuestionSet(eventArgs);
    } else if (eventName === "correctanswer") handleCorrectAnswer(eventArgs);
    else if (eventName === "players") {
      handlePlayers(eventArgs);
    } else if (eventName === "gamestart") {
      setGameMessage("Game starting in:");
      setCounter(eventArgs);
    } else if (eventName === "answerwait") {
      setGameMessage("Round ends in:");
      setCounter(eventArgs);
    } else if (eventName === "roundend") {
      handleRoundEnd(eventArgs);
    } else if (eventName === "gameover") {
      setGameMessage("Game over!");
      setCounter(" ");
      setScores(eventArgs);
    }
  };

  const handleAswerSubmit = answerNb => {
    console.log("Player select answer", answerNb);

    setSelected(answerNb);

    client.invoke(
      client.functionNames.sendGameEvent,
      { name: "select", args: answerNb },
      () => {
        // questionSet.selected = answerNb;
        // setQuestionSet(questionSet);
      }
    );
  };

  return (
    <S.Container>
      <S.Header>
        <S.GameTitleWrapper>
          <S.GameTitle>Round {round.roundNumber}</S.GameTitle>
        </S.GameTitleWrapper>
        <S.MessageWrapper>
          <S.Message>{gameMessage}</S.Message>
        </S.MessageWrapper>
        <S.CounterWrapper>
          <S.Counter>{counter}</S.Counter>
        </S.CounterWrapper>
      </S.Header>
      <S.Body>
        <S.ScoreContainer>
          <GameScores scores={scores} />
        </S.ScoreContainer>
        <S.GameContainer>
          <QuestionSet
            onSelect={handleAswerSubmit}
            questionSet={round.questionSet}
            selected={selected}
            correct={correct}
          />
        </S.GameContainer>
      </S.Body>
    </S.Container>
  );
}

export default Game;

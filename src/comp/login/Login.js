import React, { useState, useEffect } from "react";
import TopicTable from "./Topics";
import { getTopics } from "../../utils/TopicStore";
import * as S from "./LoginStyles";
import * as client from "../../utils/SocketClient";
import { Title } from "../styles";

function Login({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [topics, setTopics] = useState([{}]);
  const [topicsWasReceived, setTopicsWasReceived] = useState(false);

  useEffect(() => {
    console.log("Login - useEffect");
    if (!topicsWasReceived) getTopics(onGetTopicsCallback);
  }, [topicsWasReceived]);

  const onGetTopicsCallback = topicsRecieved => {
    console.log("topics callback - setting topics", topicsRecieved);

    setTopicsWasReceived(true);

    let newTopics = topicsRecieved.map(t => {
      return { topic: t.topic, icon: t.icon, active: false };
    });

    console.log("topics callback - new topics", newTopics);
    setTopics(newTopics);
  };

  const selectTopic = topic => {
    let newTopics = [...topics];
    let topicElement = newTopics.find(t => t.topic === topic);
    topicElement.active = !topicElement.active;
    setTopics(newTopics);
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    let selectedTopics = topics.filter(t => t.active);
    if (selectedTopics.length < 1) {
      setErrorMsg("At least one topic is needed.");
      return;
    }

    if (userName.trim().length < 1) {
      setErrorMsg("User name can't be empty.");
      return;
    }

    var topicNames = selectedTopics.map(t => t.topic);
    console.log("Login - Logging in", userName, topicNames);

    client.getInvoke(
      client.functionNames.login,
      { name: userName, topics: topicNames },
      res => {
        if (res === true) onLogin({ name: userName, topics: selectedTopics });
        else {
          setErrorMsg(
            "Can't create player. Probably player name already was taken."
          );
        }
      }
    );
  };

  return (
    <S.LoginContent>
      <S.LoginWrapper>
        <Title>Login</Title>
      </S.LoginWrapper>
      <S.LoginForm onSubmit={handleOnSubmit}>
        <S.LoginErrorInput>{errorMsg}</S.LoginErrorInput>
        <S.LoginInput
          onChange={e => setUserName(e.target.value)}
          defaultValue={userName}
          placeholder="User Name"
        ></S.LoginInput>
        <TopicTable topics={topics} onSelect={topic => selectTopic(topic)} />
        <S.LoginSubmit type={"submit"} value={"Submit"}>
          Submit
        </S.LoginSubmit>
      </S.LoginForm>
    </S.LoginContent>
  );
}

export default Login;

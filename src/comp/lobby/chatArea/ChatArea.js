import React, { useState, useEffect } from "react";
import * as S from "./ChatAreaStyles";

function ChatArea({ messages, onSend }) {
  const [messageToSend, setMessageToSend] = useState("");

  const renderMessages = () => {
    //console.log("LobbyChatArea - renderMessages", messages);
    return messages.map((msg, index) => {
      return (
        <S.MessageContainer key={index}>
          <S.MessageWrapper>
            <S.Message>{msg}</S.Message>
          </S.MessageWrapper>
        </S.MessageContainer>
      );
    });
  };

  useEffect(() => {
    var element = document.getElementsByClassName("messages")[0];
    element.scrollTop = element.scrollHeight;
  });

  const handleSend = () => {
    onSend(messageToSend);
    setMessageToSend("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <S.GroupLobbyChatContainer>
      <S.Chat className="messages">{renderMessages()}</S.Chat>

      <S.GroupLobbyChatFooter>
        <S.GroupLobbyChatInput
          type="text"
          placeholder={"Message to send"}
          value={messageToSend}
          onChange={e => setMessageToSend(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <S.GroupLobbyChatSend onClick={handleSend} />
      </S.GroupLobbyChatFooter>
    </S.GroupLobbyChatContainer>
  );
}

export default ChatArea;

import React, { useState } from "react";
import * as S from "./chatArea/ChatAreaStyles";

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
      <S.Chat>{renderMessages()}</S.Chat>

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

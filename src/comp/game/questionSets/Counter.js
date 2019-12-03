import React, { useState, useEffect } from "react";
import * as S from "./QuestionSetsStyle";
import * as store from "../GameStore";

function Counter() {
  const [count, setCount] = useState("");

  const subscribe = () => {
    store.registerCounterRefreshCallback(handleCountChange);
  };

  const handleCountChange = count => {
    setCount(count);
  };

  const unsubscribe = () => {
    store.unregisterCounterRefreshCallback();
  };

  useEffect(() => {
    subscribe();
    return unsubscribe;
  });

  return (
    
    <S.CounterWrapper>
      <S.Counter>{count}</S.Counter>
    </S.CounterWrapper>
  );
}

export default Counter;

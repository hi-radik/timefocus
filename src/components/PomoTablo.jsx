import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { getPadTime } from "../helpers/getPadTime";

import store from "../store/timeWorkStore";
import { observer } from "mobx-react-lite";
const Timer = styled.h1`
  font-size: 64px;
  color: white;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  user-select: none;
  font-weight: 500;
  text-align: center;
  position: relative;
`;

const PomoTablo = () => {
  const [isCounting, setIsCounting] = useState(false);
  // const [restTime, setRestTime] = useState(5 * 60);
  const [isRest, setIsRest] = useState(false);

  useEffect(() => {
    
    var interval = setInterval(() => {
      isCounting && store.changeValue(store.value>= 1/60 ? store.value -= 1/60 : 0);
      if (store.value < 1/60) {
        setIsCounting(false);
       
      }
      if (store.value === 1/60 && isRest) {
        setIsCounting(false);
        setIsRest(false)
        //Вот сюда передаем состояние input
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);
  //Сначала оборачиваем в функцию,которая округляет время, затем в функцию, которая добавляет 0 перед цифрами, если длина строки < 2
  const minutes = getPadTime(Math.floor(store.value * 60 / 60));
  const seconds = getPadTime(Math.floor(store.value * 60  - minutes * 60));

  const handleStart = () => {
    setIsCounting(true);
 
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  return (
    <>
      <Timer>
        <span style={{ width: "100px", textAlign: "right" }}>{minutes}</span>
        <span>:</span>
        <span style={{ width: "100px", textAlign: "left" }}>{seconds}</span>
      </Timer>
      {!isCounting ? (
        <Button
          colorScheme={"purple"}
          // gridColumn={"2/3"}
          // gridRow={"2/2"}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          size={"lg"}
          onClick={handleStart}
          w={165}
        >
          Начать
        </Button>
      ) : (
        <Button
          colorScheme={"pink"}
          // gridColumn={"2/3"}
          // gridRow={"2/2"}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          size={"lg"}
          onClick={handleStop}
          w={165}
        >
          Остановить
        </Button>
      )}
    </>
  );
};
export default observer(PomoTablo);

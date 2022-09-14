import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { getPadTime } from "../helpers/getPadTime";

import store from "../store/timeWorkStore";
import storeSecond from "../store/timeRestStore";
import { observer } from "mobx-react-lite";
import tabsStore from "../store/tabs";
import isLearn from "../store/learn";
import isBreak from "../store/break";
import isCountingFirst from "../store/countingFirst";
import isCountingSecond from "../store/countingSecond";

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

const PomoTablo = ({ no }) => {
  //Состояние - запущен таймер или нет
  //const [isCounting, setIsCounting] = useState(false);

  //Хук для того, чтобы работал отсчет
  useEffect(() => {
    var interval = setInterval(() => {
      isCountingFirst.value &&
        store.changeValue(store.value > 1 / 60 ? (store.value -= 1 / 60.1) : 0);
      if (isCountingFirst.value)
        document.title = `${getPadTime(
          Math.floor((store.value * 60) / 60)
          // THE PROBLEM IS HERE
        )}:${
          getPadTime(Math.floor(60 + store.value * 60 - minutes * 60)) >= 60
            ? getPadTime(Math.floor(store.value * 60 - minutes * 60))
            : getPadTime(Math.floor(60 + store.value * 60 - minutes * 60))
        } - time to learn!`;

      if (store.value <= 1 / 60) {
        isCountingFirst.setCountingFirst(false);
        tabsStore.changeTab(1);
        no();
        store.changeValue(store.input);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isCountingFirst.value]);

  //Сначала оборачиваем в функцию,которая округляет время, затем в функцию, которая добавляет 0 перед цифрами, если длина строки < 2
  const minutes = getPadTime(Math.floor((store.value * 60) / 60));
  const seconds = getPadTime(Math.floor(store.value * 60 - minutes * 60));

  //Функция запуска отсчета
  const handleStart = () => {
    isCountingFirst.setCountingFirst(true);
    // isCountingSecond.setCountingSecond(false);
    console.log(store.value);
  };

  //Функция остановки таймера
  const handleStop = () => {
    isCountingFirst.setCountingFirst(false);
    console.log(store.value);
  };

  return (
    <>
      <Timer>
        <span style={{ width: "100px", textAlign: "right" }}>{minutes}</span>
        <span>:</span>
        <span style={{ width: "100px", textAlign: "left" }}>{seconds}</span>
      </Timer>

      {!isCountingFirst.value ? (
        <Button
          colorScheme="purple"
          // gridColumn={"2/3"}
          // gridRow={"2/2"}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          size={"lg"}
          onClick={handleStart}
          w={165}
        >
          Start
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
          Stop
        </Button>
      )}
    </>
  );
};
export default observer(PomoTablo);

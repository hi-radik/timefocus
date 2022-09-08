import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import store from "../store/timeWorkStore";
import storeSecond from "../store/timeRestStore";

import { observer } from "mobx-react-lite";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  .d {
    margin-right: 15px;
  }
`;

function Popup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultTime = {
    work: 25,
    rest: 5,
  };

  const resetTime = () => {
    store.changeInput(defaultTime.work);
    storeSecond.changeInput(defaultTime.rest);
  };

  const saveTime = () => {
    store.changeValue(store.input)
    storeSecond.changeValue(storeSecond.input)
    onClose();
  };

  return (
    <>
      <SettingsIcon
        w={8}
        h={8}
        // color="#805AD5"
        color="white"
        cursor="pointer"
        position="absolute"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{ transform: "scale(1.1)" }}
        top={4}
        right={4}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent focusBorderColor="none">
          <ModalHeader>Настройки</ModalHeader>
          <ModalCloseButton focusBorderColor="none" />
          <ModalBody>
            <FlexDiv>
              <div className="d">
                <h2>Работа</h2>
                <NumberInput
                  size="md"
                  maxW={24}
                  // defaultValue={25}
                  min={1}
                  marginTop={0.6}
                  focusBorderColor="none"
                  /////////////////////////////////////////////////////
                  value={store.input}
                  onChange={(value) => store.changeInput(value)}
                >
                  <NumberInputField focusBorderColor="none" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>

              <div>
                <h2>Перерыв</h2>
                <NumberInput
                  size="md"
                  maxW={24}
                  min={1}
                  marginTop={0.6}
                  focusBorderColor="none"
                  value={storeSecond.input}
                  onChange={(value) => storeSecond.changeInput(value)}
                >
                  <NumberInputField focusBorderColor="none" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
            </FlexDiv>
          </ModalBody>

          <ModalFooter focusBorderColor="none">
            <Button
              colorScheme="pink"
              mr={3}
              onClick={saveTime}
              focusBorderColor="none"
            >
              Сохранить
            </Button>
            <Button variant="ghost" onClick={resetTime} focusBorderColor="none">
              Сбросить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default observer(Popup);

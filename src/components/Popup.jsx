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

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  .d {
    margin-right: 15px;
  }
`;

export default function Popup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [value1, setValue1] = useState(25);
  const [value2, setValue2] = useState(5);

  const defaultTime = {
    work: 25,
    rest: 5,
  };


  const resetTime = () => {
    setValue1(defaultTime.work);
    setValue2(defaultTime.rest);
  };

  const saveTime = () => {
    setValue1(value1);
    setValue2(value2);
    console.log(value1, value2);
    onClose();
  };

  const handleChange = (value) => {
    setValue1(value);
  };
  const handleChange2 = (value) => setValue2(value);

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
                  value={value1}
                  onChange={handleChange}
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
                  value={value2}
                  onChange={handleChange2}
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

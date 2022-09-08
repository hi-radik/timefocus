import styled from "styled-components";
import PomoTablo from "./PomoTablo";
import { Button, ButtonGroup, scaleFadeConfig } from "@chakra-ui/react";
import { Center, Square, Circle, Box } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import Popup from "./Popup";
import { useState } from "react";

const PomoBlock = () => {
  
  return (
    <Center
      bg="#B794F4"
      h="100vh"
      w="100vw"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      className="bcg"
      padding={15}
    >
      <Box
        bg="#D6BCFA"
        w="400px"
        h="250px"
        rounded={"15px"}
        // alignItems="center"
        // display="grid"
        // gridTemplateColumns="1fr 1.5fr 1fr"
        // gridTemplateRows="1fr 1fr"
        // justifyItems="cetner"
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        boxShadow="xl"
        position="relative"
      >
        <Popup />
        <PomoTablo />
      </Box>
    </Center>
  );
};
export default PomoBlock;

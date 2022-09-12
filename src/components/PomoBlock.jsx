import styled from "styled-components";
import PomoTablo2 from "./PomoTablo2";
import PomoTablo from "./PomoTablo";
import { Button, ButtonGroup, scaleFadeConfig } from "@chakra-ui/react";
import { Center, Square, Circle, Box } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import Popup from "./Popup";
import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import tabsStore from "../store/tabs";
import store from "../store/timeWorkStore";
import isLearn from "../store/learn";
import isBreak from "../store/break";

const PomoBlock = () => {

  const yes = () => {
    isLearn.setLearn(true)
    isBreak.setBreak(false)
  }
  const no = () => {
    isBreak.setBreak(true)
    isLearn.setLearn(false)
  }

  return (
    <Center
      bg={isLearn.value ? "#B794F4" : "#63B3ED"}
      h="100vh"
      w="100vw"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      className="bcg"
      padding={15}
      position="relative"
    >
      <Box
        bg={isLearn.value ? "#D6BCFA" : "#90CDF4"}
        w="500px"
        h="300px"
        rounded={"15px"}
        // alignItems="center"
        // display="grid"
        // gridTemplateColumns="1fr 1.5fr 1fr"
        // gridTemplateRows="1fr 1fr"
        // justifyItems="cetner"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
        position="relative"
      >
        <Tabs
          onChange={(index) => {
            tabsStore.changeTab(index);
            console.log(tabsStore.value);
          }}
          index={tabsStore.value}
          variant="soft-rounded"
          colorScheme={"whiteAlpha"}
          position="absolute"
          left={4}
          top={4}
          w="92%"
          h="92%"
        >
          <TabList>
            <Tab onClick={yes}>Learn</Tab>
            <Tab onClick={no}>Break</Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <PomoTablo no={no}/>
            </TabPanel>
            <TabPanel
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <PomoTablo2 yes={yes}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Popup />
      </Box>
    </Center>
  );
};
export default observer(PomoBlock);

import "./App.css";
import styled from "styled-components";
import PomoBlock from "./components/PomoBlock";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <PomoBlock />
      </ChakraProvider>
    </div>
  );
}

export default App;

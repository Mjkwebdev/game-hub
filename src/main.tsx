import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
    <Theme appearance="dark">
       <App />
      </Theme> 
    </ChakraProvider>
  </React.StrictMode>
);

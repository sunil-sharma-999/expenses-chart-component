import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const colors = {
  primary: {
    softRed: "hsl(10, 79%, 65%)",
    cyan: "hsl(186, 34%, 60%)"
  },
  neutral: {
    darkBrown: "hsl(25, 47%, 15%)",
    midBrown: "hsl(28, 10%, 53%)",
    cream: "hsl(27, 66%, 92%)",
    paleOrange: "hsl(33, 100%, 98%)"
  }
};

const theme = extendTheme({ colors });

root.render(
  <ChakraProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>
);

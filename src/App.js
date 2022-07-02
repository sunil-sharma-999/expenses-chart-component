import { Flex } from "@chakra-ui/react";
import { Balance } from "./components/Balance";
import "./styles.css";

export default function App() {
  return (
    <Flex bgColor="neutral.cream">
      <Balance />
    </Flex>
  );
}

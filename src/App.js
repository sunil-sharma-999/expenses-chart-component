import { Flex } from "@chakra-ui/react";
import { Balance } from "./components/Balance";
import { Chart } from "./components/Chart";
import "./styles.css";

export default function App() {
  return (
    <Flex
      bgColor="neutral.cream"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        p="10px"
        w={["360px", "450px", "560px"]}
        flexDir="column"
        fontFamily="DM Sans"
      >
        <Balance />
        <Chart />
      </Flex>
    </Flex>
  );
}

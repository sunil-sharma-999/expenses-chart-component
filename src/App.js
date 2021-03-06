import { Flex, Grid } from "@chakra-ui/react";
import { Balance } from "./components/Balance";
import { Chart } from "./components/Chart";
import "./styles.css";

export default function App() {
  return (
    <Grid h="100vh" justifyContent="center" alignItems="center">
      <Flex
        px="10px"
        py="3rem"
        w={["360px", "450px", "560px"]}
        flexDir="column"
        fontFamily="DM Sans"
      >
        <Balance />
        <Chart />
      </Flex>
    </Grid>
  );
}

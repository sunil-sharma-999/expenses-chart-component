import { Flex, Image, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import logo from "../../images/logo.svg";

export const Balance = () => {
  return (
    <Flex
      bg="primary.softRed"
      rounded="12"
      px="8"
      py="6"
      color="white"
      alignItems="center"
      justifyContent="center"
      letterSpacing="wide"
    >
      <Stat>
        <StatLabel
          color="neutral.paleOrange"
          fontSize={["1rem", "1.1rem", "1.2rem"]}
        >
          My Balance
        </StatLabel>
        <StatNumber fontSize={["2rem", "2.1rem", "2.2rem"]} fontWeight="700">
          $921.48
        </StatNumber>
      </Stat>
      <Image src={logo} alt="logo" boxSize="5rem" />
    </Flex>
  );
};

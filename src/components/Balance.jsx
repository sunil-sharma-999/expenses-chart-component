import { Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import logo from "../../images/logo.svg";

export const Balance = () => {
  return (
    <Flex
      bg="primary.softRed"
      rounded="10"
      px="8"
      py="6"
      color="white"
      alignContent="center"
      justifyContent="center"
      letterSpacing="wide"
    >
      <Stat>
        <StatLabel fontSize="1rem">My Balance</StatLabel>
        <StatNumber fontWeight="700">$921.48</StatNumber>
      </Stat>
      <img src={logo} alt="logo" className="logo" />
    </Flex>
  );
};

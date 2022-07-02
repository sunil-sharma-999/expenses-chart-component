import { Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import logo from "../../images/logo.svg";

export const Balance = () => {
  return (
    <Flex>
      <Stat>
        <StatLabel>Balance</StatLabel>
        <StatNumber>£0.00</StatNumber>
      </Stat>
      <div className="logo-wrap">
        <img src={logo} alt="" />
      </div>
    </Flex>
  );
};

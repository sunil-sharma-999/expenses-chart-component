import { Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

export const MonthStat = () => {
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      color="black"
      letterSpacing="wide"
      pt="1.5rem"
    >
      <Stat>
        <StatLabel color="neutral.midBrown" fontSize="1rem">
          Total this month
        </StatLabel>
        <StatNumber fontSize="2rem" fontWeight="700" color="neutral.darkBrown">
          $478.33
        </StatNumber>
      </Stat>
      <Stat textAlign="end" alignSelf="end">
        <StatNumber fontSize="1rem" fontWeight="700" color="neutral.darkBrown">
          +2.4%
        </StatNumber>
        <StatLabel color="neutral.midBrown" fontSize="1rem">
          from last month
        </StatLabel>
      </Stat>
    </Flex>
  );
};

import { Box, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";
import data from "../data.json";
import { MonthStat } from "./MonthStat";

export const Chart = () => {
  const maxAmount = Math.max(...data.map((item) => item.amount));

  return (
    <Box
      bgColor="white"
      my={["1rem", "1.2rem", "1.5rem"]}
      px={["1rem", "1rem", "2.5rem"]}
      py={["1rem", "1rem", "2rem"]}
      rounded={[12, 12, 15]}
    >
      <Text
        fontSize={["1rem", "1.9rem"]}
        letterSpacing="wide"
        fontWeight="700"
        color="primary.darkBrown"
      >
        Spending - Last 7 Days
      </Text>
      <Flex
        py="5"
        gap="1"
        justifyContent="center"
        h="17rem"
        alignItems="center"
      >
        {data.map((item) => {
          return (
            <Flex
              flexDir="column"
              justifyContent="flex-end"
              alignItems="center"
              h="100%"
              flex="1"
              key={item.day}
            >
              <Tooltip
                fontFamily="inherit"
                label={`$${item.amount}`}
                bgColor="neutral.darkBrown"
                px="2"
                py={["2", "2.5"]}
                fontSize={["0.9rem", "1.2rem"]}
                rounded="5"
                fontWeight="700"
                color="white"
                placement="top"
              >
                <Box
                  cursor="pointer"
                  bgColor={
                    maxAmount === item.amount
                      ? "primary.cyan"
                      : "primary.softRed"
                  }
                  h={item.amount * 3.0}
                  w={["2.2rem", "2.8rem", "3.4rem"]}
                  rounded="5"
                />
              </Tooltip>
              <Text as="span" mt="2" color="neutral.midBrown">
                {item.day}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Divider />
      <MonthStat />
    </Box>
  );
};

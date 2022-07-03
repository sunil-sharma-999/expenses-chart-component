import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import data from "../../data.json";
import { MonthStat } from "./MonthStat";

export const Chart = () => {
  const maxAmount = Math.max(...data.map((item) => item.amount));

  return (
    <Box bgColor="white" my="1em" p="1em" rounded="10">
      <Heading
        size="lg"
        letterSpacing="wide"
        fontWeight="700"
        color="primary.darkBrown"
      >
        Spending - Last 7 Days
      </Heading>
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
              <Box
                bgColor={
                  maxAmount === item.amount ? "primary.cyan" : "primary.softRed"
                }
                h={item.amount * 3.0}
                w="2.2em"
                rounded="5"
              />
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

import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Sender({ item }) {
  return (
    <>
      <Flex w={"100%"} justifyContent={"flex-end"} pr="4">
        <Flex
          bg="#2DDCB1"
          boxShadow={"md"}
          borderRadius={20}
          px={3}
          h="40px"
          mt="3"
          justifyContent={"center"}
          direction={"column"}
        >
          <Text color={"#fff"}>{item.body}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Sender;

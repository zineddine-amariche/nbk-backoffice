import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Chatcontainer = ( { children }) => {
  return (
    <Box
      outline="hidden"
      m="20px 60px"
      h="83vh"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
    >
      <Flex direction="row">{children}</Flex>
    </Box>
  );
};

export default Chatcontainer;

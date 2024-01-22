import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Skeleton,
  SkeletonCircle,
  Stack,
  Box,
} from "@chakra-ui/react";

export default function LoadingMessages() {
  return (
    <Box
      
    >
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Box>
  );
}

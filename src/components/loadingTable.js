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
} from "@chakra-ui/react";

export default function LoadingTable() {
  return (
    <Table
      overflow="hidden"
      rounded="xl"
      shadow="xl"
      bg={useColorModeValue("white", "gray.900")}
    >
      <Thead overflow="hidden" bg="gray.200">
        <Tr overflow="hidden">
          <Th>
            <Skeleton height="12px" width="100px"></Skeleton>
          </Th>
          <Th>
            <Skeleton height="12px" width="80px"></Skeleton>
          </Th>
          <Th>
            <Skeleton height="12px" width="70px"></Skeleton>
          </Th>
          <Th>
            <Skeleton height="12px" width="50px"></Skeleton>
          </Th>
          <Th>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr overflow="hidden">
          <Td>
            <Skeleton height="12px" width="80px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <SkeletonCircle size="10" />
          </Td>

          <Td>
            <Skeleton height="12px" width="80px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton height="12px" width="60px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="70px"></Skeleton>
          </Td>
          <Td>
            <SkeletonCircle size="10" />
          </Td>
          <Td>
            <Skeleton height="12px" width="60px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="70px"></Skeleton>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="60px"></Skeleton>
          </Td>
          <Td>
            <SkeletonCircle size="10" />
          </Td>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="60px"></Skeleton>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <SkeletonCircle size="10" />
          </Td>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="80px"></Skeleton>
          </Td>
          <Td>
            <SkeletonCircle size="10" />
          </Td>
          <Td>
            <Skeleton height="12px" width="90px"></Skeleton>
          </Td>
          <Td>
            <Skeleton height="12px" width="80px"></Skeleton>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

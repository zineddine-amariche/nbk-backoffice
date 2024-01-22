import { useEffect, useMemo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiShow } from "react-icons/bi";

import useStore from "store";
export default function useTransactions({ userId }) {
  const getLoading = useStore((state) => state.transactions.getLoading);
  const transactions = useStore((state) => state.transactions.transactions);
  const getUserTransactions = useStore((state) => state.getUserTransactions);
  useEffect(() => {
    getUserTransactions({ userId });
  }, [getUserTransactions, userId]);
  const transactionColumns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "transactionId",
      },
      {
        Header: "currency",
        accessor: "currency",
      },

      {
        Header: "name",
        accessor: "name",
      },
      {
        Header: "transactionType",
        accessor: "transactionType",
      },
      {
        Header: "amount",
        accessor: "amount",
      },
      {
        Header: "walletCreditBalance",
        accessor: "walletCreditBalance",
      },
      {
        Header: "walletDebitBalance",
        accessor: "walletDebitBalance",
      },
      {
        Header: "createdDate",
        accessor: "createdDate",
      },

      {
        accessor: "viewww",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <SingleView original={original}></SingleView>
            </>
          );
        },
      },
    ],
    []
  );
  return { transactionLoading: getLoading, transactions, transactionColumns };
}

function SingleView({ original }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <BiShow style={{ fontSize: 24 }}></BiShow>
      </Button>

      <Drawer size="xl" placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            // bg="linear-gradient(to right, #56ab2f, #a8e063)"
            bg="#2DDCB1"
            color="white"
            borderBottomWidth="1px"
            h="md"
          >
            <Flex py="8" justifyContent="space-between" alignItems="center">
              <Box>Visualiser Un Transaction</Box>
              <Flex>{/* <Delete id={original.id}></Delete> */}</Flex>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid
              border="1px solid black"
              rounded="xl"
              p="4"
              columns={{ base: 1, md: 2 }}
              spacing={8}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  ID :{" "}
                </Text>
                <Text fontSize="lg">{original.transactionId}</Text>
              </Flex>

              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  CREATED DATE :{" "}
                </Text>
                <Text fontSize="lg">{original.createdDate}</Text>
              </Flex>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

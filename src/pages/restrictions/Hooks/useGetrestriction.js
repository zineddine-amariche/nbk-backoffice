import { useEffect, useMemo, useState } from "react";

import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  Text,
  DrawerContent,
  DrawerHeader,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  useDisclosure,
  DrawerOverlay,
} from "@chakra-ui/react";
import useStore from "store";
import { RiEditBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Delete from "../Components/Delete";



export default function useGetRestrictions() {
  const getLoading = useStore((state) => state.restrictions.getLoading);
  const restrictions = useStore((state) => state.restrictions.restriction);
  const getAllRestrictions = useStore((state) => state.getAllRestrictions);

  useEffect(() => {
    getAllRestrictions();
  }, [getAllRestrictions]);

  const restrictionColumns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Pays",
        accessor: "name",
      },
      {
        Header: "liste blanche",
        accessor: "isWhitelist",
        Cell: ({ row: { original } }) => {
          return (
            <>
              {!original.isWhitelist && (
                <Badge variant="solid" colorScheme="orange">
                  false
                </Badge>
              )}
              {original.isWhitelist && (
                <Badge variant="solid" colorScheme="green">
                  true
                </Badge>
              )}
            </>
          );
        },
      },
      {
        Header: "date de début",
        accessor: "startDate",
      },
      {
        Header: "date de création",
        accessor: "createdDate",
      },
      {
        Header: "status",
        accessor: "status",
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.status === "PENDING" && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.status === "VALIDATED" && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.status === "CANCELED" && (
                <Badge variant="solid" colorScheme="red">
                  annulé
                </Badge>
              )}
            </>
          );
        },
      },
      {
        accessor: "viewww",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <HStack>
                <SingleView original={original}></SingleView>
              </HStack>
            </>
          );
        },
      },
    ],
    []
  );
  return {
    restrictionsLoading: getLoading,
    restrictions,
    col: restrictionColumns,
  };
}

function SingleView({ original }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getSingleLoading = useStore((state) => state.restrictions.getSingleLoading);
  const singlRestriction = useStore(
    (state) => state.restrictions.singlRestriction
  );
  const getRestriction = useStore((state) => state.getRestriction);

  const getSingleView = () => {
    getRestriction(original.id);
    onOpen();
  };
  // console.log("singlRestriction", singlRestriction);
  return (
    <>
      <Button onClick={getSingleView}>
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
              <Box>Visualiser restrictions pay</Box>
              <HStack>
                <Delete id={original.id}></Delete>
              </HStack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Heading my="4" size="md">
               informations :
            </Heading>
    
            {getSingleLoading ? (
              <Flex mt="8" justifyContent="center">
                <Spinner></Spinner>
              </Flex>
            ):
            
            <SimpleGrid
              border="1px solid black"
              rounded="xl"
              p="4"
              columns={{ base: 1, md: 2 }}
              spacing={8}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Id :{" "}
                </Text>
                <Text fontSize="lg">{singlRestriction.id}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  status :{" "}
                </Text>
                <Text fontSize="lg">{singlRestriction.status}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  pay :{" "}
                </Text>
                <Text fontSize="lg">{singlRestriction.name}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  createdDate :{" "}
                </Text>
                <Text fontSize="lg">{singlRestriction.createdDate}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  startDate :{" "}
                </Text>
                <Text fontSize="lg">{singlRestriction.startDate}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  countries :{" "}
                </Text>
                {singlRestriction?.countries?.map((co,ind) => {
                  return <Text fontSize="lg" key={ind}>{co}</Text>;
                })}
              </Flex>
            </SimpleGrid>
            
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

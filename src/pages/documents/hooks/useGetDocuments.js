import { useEffect, useMemo } from "react";
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BiShow } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Delete from "../components/Delete";
import useStore from "store";
import { Link } from "react-router-dom";
export default function useGetWallets() {
  const getLoading = useStore((state) => state.documents.getLoading);
  const documents = useStore((state) => state.documents.documents);
  const getAllDocuments = useStore((state) => state.getAllDocuments);
  useEffect(() => {
    getAllDocuments();
  }, [getAllDocuments]);
  const documentColumns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "documentId",
      },
      {
        Header: "type",
        accessor: "documentType",
      },
      {
        Header: "last name",
        accessor: "userLastname",
      },
      {
        Header: "first name",
        accessor: "userFirstname",
      },

      {
        Header: "status",
        accessor: "status",
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.documentStatus === "PENDING" && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.documentStatus === "VALIDATED" && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.documentStatus === "CANCELED" && (
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
              <SingleView original={original}></SingleView>
            </>
          );
        },
      },
    ],
    []
  );
  return { documentLoading: getLoading, documents, documentColumns };
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
              <Box>Visualiser Un Document</Box>
              <Flex>
                <Delete id={original.documentId}></Delete>
              </Flex>
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
                  TAG :{" "}
                </Text>
                <Text fontSize="lg">{original.documentTag}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  STATUS :{" "}
                </Text>
                {original.documentStatus === "PENDING" && (
                  <Badge variant="solid" colorScheme="orange">
                    en attendant
                  </Badge>
                )}
                {original.documentStatus === "VALIDATED" && (
                  <Badge variant="solid" colorScheme="green">
                    validé
                  </Badge>
                )}
                {original.documentStatus === "CANCELED" && (
                  <Badge variant="solid" colorScheme="red">
                    annulé
                  </Badge>
                )}
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  LAST NAME :{" "}
                </Text>
                <Text fontSize="lg">{original.userLastname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  FIRST NAME :{" "}
                </Text>
                <Text fontSize="lg">{original.userFirstname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  CREATE DATE :{" "}
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

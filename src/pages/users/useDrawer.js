import React from "react";
import { useState } from "react";
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Heading,
  Text,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import useStore from "store";
import { Link } from "react-router-dom";
import { RiEditBoxFill } from "react-icons/ri";
import DisableUser from "../../pages/users/components/DisableUser";
import EnableUser from "../../pages/users/components/EnableUser";

function UseDrawer({ original, isOpen, onOpen, onClose }) {
  const getLoading = useStore((state) => state.wallets.getLoading);
  const wallets = useStore((state) => state.wallets.wallets);
  const getAllWallets = useStore((state) => state.getAllWallets);
  const [first, setfirst] = useState(false);

  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1 ") + " €";
  }
  return (
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
            <Box>Visualiser Un Utilisateur</Box>
            <HStack>
              {/* <Delete id={original.documentId}></Delete> */}
              <Link to={`/users?id=${original?.userId}`}>
                <Button bg="black" _hover={{ bg: "black" }}>
                  <RiEditBoxFill style={{ fontSize: 26 }}></RiEditBoxFill>
                </Button>
              </Link>
              {/* <DisableUser userName={original?.email}></DisableUser> */}
              {/* <EnableUser userName={original?.email}></EnableUser> */}
            </HStack>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Heading my="4" size="md">
            user info :
          </Heading>
          <SimpleGrid
            border="1px solid black"
            rounded="xl"
            p="4"
            columns={{ base: 1, md: 2 }}
            spacing={8}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                Nom :{" "}
              </Text>
              <Text fontSize="lg">{original.firstname}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                Prénom :{" "}
              </Text>
              <Text fontSize="lg">{original.lastname}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                Email :{" "}
              </Text>
              <Text fontSize="lg">{original.email}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                Téléphone :{" "}
              </Text>
              <Text fontSize="lg">{original.phone}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                Pays :{" "}
              </Text>
              <Text fontSize="lg">{original.state}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                Ville :{" "}
              </Text>
              <Text fontSize="lg">{original.city}</Text>
            </Flex>
          </SimpleGrid>
          {getLoading ? (
            <Flex mt="8" justifyContent="center">
              <Spinner></Spinner>
            </Flex>
          ) : (
            <>
              <Heading my="4" size="md">
                user wallets :
              </Heading>
              {!wallets && (
                <Flex
                  w="full"
                  p="16"
                  justifyContent="center"
                  alignItems="center"
                >
                  il n'y a pas de données
                </Flex>
              )}
              {wallets?.map((wallet) => (
                <SimpleGrid
                  key={wallet.walletId}
                  border="1px solid black"
                  rounded="xl"
                  p="4"
                  mt="8"
                  columns={{ base: 1, md: 2 }}
                  spacing={8}
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="lg" fontWeight="bold">
                      Wallet ID :
                    </Text>
                    <Text fontSize="lg">{wallet.walletId}</Text>
                  </Flex>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="lg" fontWeight="bold">
                      Solde :{" "}
                    </Text>
                    <Text fontSize="lg">{currencyFormat(wallet.solde)}</Text>
                  </Flex>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="lg" fontWeight="bold">
                      iban :{" "}
                    </Text>
                    <Text fontSize="lg">{wallet.iban}</Text>
                  </Flex>
                </SimpleGrid>
              ))}
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default UseDrawer;

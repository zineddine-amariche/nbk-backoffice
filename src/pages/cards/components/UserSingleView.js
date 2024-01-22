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
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { BiShow } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import UnblockPin from "../components/UnblockPin";
import LockUnlock from "../components/LockUnlock";
import useStore from "store";
import { RiEditBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import DisableUser from "pages/users/components/DisableUser";
import EnableUser from "pages/users/components/EnableUser";

export default function UserSingleView({ userId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getUser = useStore((state) => state.getUser);
  const getSingleLoading = useStore((state) => state.users.getSingleLoading);
  const user = useStore((state) => state.users.user);

  const getSingleView = () => {
    getUser(userId);
    onOpen();
  };

  // console.log("userrr", user);
  // console.log("userrr", userId);
  // console.log("userrr", getSingleLoading);

  return (
    <>
      <Button variant="link" onClick={getSingleView}>
        {userId}
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
              <Box>Visualiser Un Utilisateur</Box>
              <HStack>
                <Link to={`/users?id=${user?.userId}`}>
                  <Button bg="black" _hover={{ bg: "black" }}>
                    <RiEditBoxFill style={{ fontSize: 26 }}></RiEditBoxFill>
                  </Button>
                </Link>
                <DisableUser userName={user?.email}></DisableUser>
                <EnableUser userName={user?.email}></EnableUser>
              </HStack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {getSingleLoading ? (
              <Flex justifyContent="center">
                <Spinner></Spinner>
              </Flex>
            ) : (
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
                  <Text fontSize="lg">{user?.firstname}</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Prénom :{" "}
                  </Text>
                  <Text fontSize="lg">{user?.lastname}</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Email :{" "}
                  </Text>
                  <Text fontSize="lg">{user?.email}</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Téléphone :{" "}
                  </Text>
                  <Text fontSize="lg">{user?.phone}</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Pays :{" "}
                  </Text>
                  <Text fontSize="lg">{user?.state}</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Ville :{" "}
                  </Text>
                  <Text fontSize="lg">{user?.city}</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Wallet ID :{" "}
                  </Text>
                  <Text fontSize="lg">{user?.walletId}</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Card ID :{" "}
                  </Text>
                  <Text fontSize="lg">{user?.cardId}</Text>
                </Flex>
              </SimpleGrid>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

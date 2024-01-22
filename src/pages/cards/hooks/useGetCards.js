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
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import UnblockPin from "../components/UnblockPin";
import LockUnlock from "../components/LockUnlock";
import Limit from "../components/limit";
import Options from "../components/options";
import Activate from "../components/Activate";
import useStore from "store";

import UserSingleView from "../components/UserSingleView";

export default function useGetCards() {
  const getLoading = useStore((state) => state.cards.getLoading);
  const cards = useStore((state) => state.cards.cards);
  const getAllCards = useStore((state) => state.getAllCards);

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  const cardColumns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "cardId",
      },
      {
        Header: "wallet id",
        accessor: "walletTypeId",
      },
      {
        Header: "user id",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <UserSingleView userId={original.userId}></UserSingleView>
            </>
          );
        },
      },
      {
        Header: "status code",
        accessor: "statusCode",
      },
      {
        Header: "masked pan",
        accessor: "maskedPan",
      },
      {
        Header: "perms group",
        accessor: "permsGroup",
      },
      {
        accessor: "viewww",
        Cell: ({ row: { original } }) => {
          // console.log('original', original)
          return (
            <HStack>
              <SingleView original={original}></SingleView>

              <Menu>
                <MenuButton size="sm" as={Button}>
                  <BsThreeDotsVertical></BsThreeDotsVertical>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Activate id={original.cardId}></Activate>
                  </MenuItem>
                  <MenuItem>
                    <LockUnlock id={original.cardId}></LockUnlock>
                  </MenuItem>
                  <MenuItem>
                    <UnblockPin id={original.cardId}></UnblockPin>
                  </MenuItem>
                  <MenuItem>
                    <Options id={original.cardId}></Options>
                  </MenuItem>
                  <MenuItem>
                    <Limit id={original.cardId}></Limit>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          );
        },
      },
    ],
    []
  );
  return { cardLoading: getLoading, cards, cardColumns };
}

function SingleView({ original }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size="sm" onClick={onOpen}>
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
              <Box>Visualiser Un Cart</Box>
              <Flex>
                <AiFillDelete style={{ fontSize: 26 }}></AiFillDelete>
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
                  CART ID :{" "}
                </Text>
                <Text fontSize="lg">{original.cardId}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  USER ID :{" "}
                </Text>
                <Text fontSize="lg">{original.userId}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  START DATE :{" "}
                </Text>
                <Text fontSize="lg">{original.startDate}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  END DATE :{" "}
                </Text>
                <Text fontSize="lg">{original.endDate}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  DELIVIERY TITLE :{" "}
                </Text>
                <Text fontSize="lg">{original.deliveryTitle}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  DELIVERY COUNTRY :{" "}
                </Text>
                <Text fontSize="lg">{original.deliveryCountry}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  MASKED PAN :{" "}
                </Text>
                <Text fontSize="lg">{original.maskedPan}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  PERMS GROUP:{" "}
                </Text>
                <Text fontSize="lg">{original.permsGroup}</Text>
              </Flex>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

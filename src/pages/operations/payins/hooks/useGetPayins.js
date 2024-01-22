import { useEffect, useMemo } from 'react';
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
} from '@chakra-ui/react';
import { BiShow } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

import useStore from 'store';

export default function useGetCards() {
  const getLoading = useStore((state) => state.payins.getLoading);
  const payins = useStore((state) => state.payins.payins);
  const getAllPayins = useStore((state) => state.getAllPayins);
  useEffect(() => {
    getAllPayins();
  }, [getAllPayins]);
  const payinColumns = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'payinId',
      },
      {
        Header: 'wallet id',
        accessor: 'walletId',
      },
      {
        Header: 'user id',
        accessor: 'userId',
      },
      {
        Header: 'amount',
        accessor: 'amount',
      },
      {
        Header: 'currency',
        accessor: 'currency',
      },
      {
        Header: 'payment method id',
        accessor: 'paymentMethodId',
      },

      {
        Header: 'status',
        accessor: 'status',
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.payinStatus === 'PENDING' && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.payinStatus === 'VALIDATED' && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.payinStatus === 'CANCELED' && (
                <Badge variant="solid" colorScheme="red">
                  annulé
                </Badge>
              )}
            </>
          );
        },
      },
      {
        accessor: 'viewww',
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
  return { payinLoading: getLoading, payins, payinColumns };
}

function SingleView({ original }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <BiShow style={{ fontSize: 24 }}></BiShow>
      </Button>

      <Drawer size="xl" placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            bg="linear-gradient(to right, #56ab2f, #a8e063)"
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
                  Wallet ID :{' '}
                </Text>
                <Text fontSize="lg">{original.walletId}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  USER ID :{' '}
                </Text>
                <Text fontSize="lg">{original.userId}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Currency :{' '}
                </Text>
                <Text fontSize="lg">{original.currency}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Amount :{' '}
                </Text>
                <Text fontSize="lg">{original.amount}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Payment Method Id :{' '}
                </Text>
                <Text fontSize="lg">{original.paymentMethodId}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Created Date :{' '}
                </Text>
                <Text fontSize="lg">{original.createdDate}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Creditor Name :{' '}
                </Text>
                <Text fontSize="lg">{original.creditorName}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Iban Full Name :{' '}
                </Text>
                <Text fontSize="lg">{original.ibanFullname}</Text>
              </Flex>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

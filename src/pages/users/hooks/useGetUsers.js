import { useCallback, useEffect, useMemo, useState } from "react";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  Badge,
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
  Spinner,
  Heading,
  Text,
  HStack,
  useToast,
  Input,
  Center,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useLocation } from "react-router-dom";

import useStore from "store";
import { RiEditBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import DisableUser from "../components/DisableUser";
import EnableUser from "../components/EnableUser";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useGetWallets() {
  const toast = useToast();
  const getAllUsers = useStore((state) => state.getAllUsers);
  const getLoading = useStore((state) => state.users.getLoading);
  const users = useStore((state) => state.users.users);
  const getUser = useStore((state) => state.getUser);
  const getSingleLoading = useStore((state) => state.users.getSingleLoading);
  const updateKycReview = useStore((state) => state.updateKycReview);
  const updateKycLiveness = useStore((state) => state.updateKycLiveness);
  const kyclivenessLoading = useStore(
    (state) => state.users.kyclivenessLoading
  );
  const kycreviewLoading = useStore((state) => state.users.kycreviewLoading);
  const user = useStore((state) => state.users.user);

  // console.log("kycrloading", kycreviewLoading);

  let location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  // console.log(queryParams.get("id"));
  let userId = queryParams.get("id");
  useEffect(() => {
    userId ? getUser(userId) : getAllUsers();
  }, [getAllUsers, getUser, userId]);

  const disptachKycReviewUpdate = useCallback(
    async (userId) => {
      const res = await updateKycReview(userId);
      if (res?.data?.status === "success") {
        toast({
          description: "opération terminée avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          description: "quelque chose s'est mal passé",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    },
    [updateKycReview]
  );
  const disptachKycLivenessUpdate = useCallback(
    async (userId) => {
      const res = await updateKycLiveness(userId);
      if (res?.data?.status === "success") {
        toast({
          description: "opération terminée avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          description: "quelque chose s'est mal passé",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    },
    [updateKycLiveness]
  );

  const userColumns = useMemo(
    () => [
      // {
      //   Header: "userId ",
      //   accessor: "userId",
      // },
      {
        Header: "Identifiant ",
        accessor: `firstname`,
      },
      // {
      //   Header: "Prénom",
      //   accessor: "lastname",
      // },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Téléphone",
        accessor: "phone",
      },
      {
        Header: "Pays",
        accessor: "state",
      },
      {
        Header: "Ville",
        accessor: "city",
      },

      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original?.userStatus === "PENDING" && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original?.userStatus === "VALIDATED" && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original?.userStatus === "CANCELED" && (
                <Badge variant="solid" colorScheme="red">
                  annulé
                </Badge>
              )}
            </>
          );
        },
      },

      {
        Header: "actions",
        accessor: "viewww",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <HStack>
                <SingleView original={original}></SingleView>
                {/* <Button
                  isLoading={kyclivenessLoading?.userId === original?.userId}
                  isDisabled={kyclivenessLoading?.loading}
                  onClick={() => disptachKycLivenessUpdate(original?.userId)}
                  colorScheme="orange"
                >
                  kycliveness
                </Button>
                <Button
                  isLoading={kycreviewLoading?.userId === original?.userId}
                  isDisabled={kycreviewLoading?.loading}
                  onClick={() => disptachKycReviewUpdate(original?.userId)}
                  colorScheme="orange"
                >
                  kycreview
                </Button> */}
              </HStack>
            </>
          );
        },
      },
      {
        Header: "transactions",
        accessor: "links",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <Text color="purple.500" fontWeight="bold" cursor="pointer">
                <Link to={`/users/transactions?userId=${original?.userId}`}>
                  transactions
                </Link>
              </Text>
            </>
          );
        },
      },
      {
        Header: "Beneficiare",
        accessor: "linksss",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <BeneficiareButton original={original}>
                Beneficiare
              </BeneficiareButton>
            </>
          );
        },
      },
    ],
    []
  );
  return {
    userLoading: getLoading,
    users,
    userColumns,
    userId,
    user,
    getSingleLoading,
  };
}

function SingleView({ original }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getLoading = useStore((state) => state.wallets.getLoading);
  const wallets = useStore((state) => state.wallets.wallets);
  const getAllWallets = useStore((state) => state.getAllWallets);
  const [first, setfirst] = useState(false);

  const getSingleView = () => {
    // getAllWallets({ userId: original?.userId, pageCount: 2 });
    //TODO WALLET USERID IS HARD CODED
    getAllWallets({ userId: 2151518 });
    onOpen();
  };

  const getSingleCloture = () => {
    // console.log('original', original.userId)
    getAllWallets({ userId: 2151518 });
    setfirst(!first);
  };

  const OnClosed = () => {
    setfirst(false);
  };
  // console.log("user id", original.userId);
  // console.log("wallets of user", wallets);
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1 ") + " €";
  }
  return (
    <>
      {/* <Button onClick={getSingleView}>
        <BiShow style={{ fontSize: 24 }}></BiShow>
      </Button> */}
      <Button onClick={getSingleCloture} width={20}>
        Clôturer
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
                {/* <Delete id={original.documentId}></Delete> */}
                <Link to={`/users?id=${original?.userId}`}>
                  <Button bg="black" _hover={{ bg: "black" }}>
                    <RiEditBoxFill style={{ fontSize: 26 }}></RiEditBoxFill>
                  </Button>
                </Link>
                <DisableUser userName={original?.email}></DisableUser>
                <EnableUser userName={original?.email}></EnableUser>
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
                <Text fontSize="lg">{original?.firstname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Prénom :{" "}
                </Text>
                <Text fontSize="lg">{original?.lastname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Email :{" "}
                </Text>
                <Text fontSize="lg">{original?.email}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Téléphone :{" "}
                </Text>
                <Text fontSize="lg">{original?.phone}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Pays :{" "}
                </Text>
                <Text fontSize="lg">{original?.state}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Ville :{" "}
                </Text>
                <Text fontSize="lg">{original?.city}</Text>
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
      <Drawer size="xl" placement={"right"} onClose={OnClosed} isOpen={first}>
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
              <Box>Cloture d'un compte </Box>
              <HStack>
                <Link to={`/users?id=${original?.userId}`}>
                  <Button bg="black" _hover={{ bg: "black" }}>
                    <RiEditBoxFill style={{ fontSize: 26 }}></RiEditBoxFill>
                  </Button>
                </Link>
                <DisableUser userName={original?.email}></DisableUser>
                <EnableUser userName={original?.email}></EnableUser>
              </HStack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
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
                <SimpleGrid
                  fullWidth
                  rounded="xl"
                  p="4"
                  mt="8"
                  columns={{ base: 1, md: 2 }}
                  spacing={1}
                  alignItems="center"
                >
                  <Text fontSize="lg" fontWeight="bold">
                    iban :{" "}
                  </Text>
                  <Input
                    mx="2"
                    variant="filled"
                    type="number"
                    w={"100%"}
                    // defaultValue={}
                    onChange={(e) => {}}
                    placeholder="Enter iban"
                  />
                </SimpleGrid>
                <HStack fullWidth mt="4" justifyContent="center">
                  <Button width={40} color="#f00">
                    Valider la clôture
                  </Button>
                </HStack>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function BeneficiareButton({ children, original }) {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const disableUser = useStore((state) => state.disableUser);
  const blockLoading = useStore((state) => state.users.blockLoading);
  const getLoading = useStore((state) => state.benefits.getLoading);
  const benefits = useStore((state) => state.benefits.benefits);
  const getFilteredBenefits = useStore((state) => state.getFilteredBenefits);
  const createBenifits = useStore((state) => state.createBenifits);

  const schema = yup
    .object({
      address: yup.string().required(),
      bic: yup.string().min(5).required(),
      iban: yup.string().min(5).required(),
      name: yup.string().min(5).required(),
      nickName: yup.string().min(5).required(),
      userId: yup.string().min(5).required(),
      
    })
    .required();

  const login = useStore((state) => state.login);
  const toast = useToast();

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const res = await createBenifits(data);
console.log('res', res.status)
    if (res?.status === 200) {
      toast({
        description: "opération terminée avec succès",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        description:
          res?.data?.StatusDescription || "quelque chose s'est mal passé",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  // console.log('benefits', benefits)
  return (
    <>
      <Button
        cursor="pointer"
        onClick={() => {
          onEditOpen();
          getFilteredBenefits(original?.id);
        }}
      >
        {children}
      </Button>

      <Modal
        isOpen={isEditOpen}
        size={"xl"}
        onClose={onEditClose}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Liste Beneficiares</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {benefits?.length ? (
              benefits.map((benefits) => {
                return (
                  <SimpleGrid
                    // border="1px solid black"
                    rounded="xl"
                    p="4"
                    // columns={{ base: 1, md: 2 }}
                    // spacing={8}
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        USER ID :{" "}
                      </Text>
                      <Text fontSize="lg">{benefits.userId}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        NICK NAME :{" "}
                      </Text>
                      <Text fontSize="lg">{benefits.nickName}</Text>
                    </Flex>

                    {/* <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        NICK NAME :{" "}
                      </Text>
                      <Text fontSize="lg">{benefits.nickName}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        NAME :{" "}
                      </Text>
                      <Text fontSize="lg">{benefits.name}</Text>
                    </Flex> */}
                  </SimpleGrid>
                );
              })
            ) : (
              <Flex w="full" p="16" justifyContent="center" alignItems="center">
                il n'y a pas de données
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={blockLoading}
              ref={cancelRef}
              onClick={onEditClose}
            >
              Cancel
            </Button>
            <Button
              isDisabled={blockLoading}
              isLoading={blockLoading}
              colorScheme="green"
              onClick={() => {
                onEditClose();

                // setTimeout(() => {
                onDeleteOpen();
                // console.log("original click", original);
                // }, 1000);
              }}
              ml={3}
            >
              Créer Bénéficiaire
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Créer Bénéficiaire</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Stack spacing={3}>
                <Flex>
                <FormControl isInvalid={errors.UserId} mx={2}>
                    <FormLabel>UserId</FormLabel>{original?.userId}
                    <Input
                      type="number"
                      required
                      placeholder="userId"
                      variant="filled"
                      {...register("userId")}
                      // value={original.userId}
                      // disabled
                    ></Input>
                    {errors.userId && (
                      <FormErrorMessage>{errors.userId.message}</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={errors.name} mx={2}>
                    <FormLabel>name</FormLabel>
                    <Input
                      type="name"
                      required
                      placeholder="nom"
                      variant="filled"
                      {...register("name")}
                    ></Input>
                    {errors.name && (
                      <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={errors.nickName}>
                    <FormLabel>Surnom</FormLabel>
                    <Input
                      type="nickName"
                      required
                      placeholder="Surnom"
                      variant="filled"
                      {...register("nickName")}
                    ></Input>
                    {errors.nickName && (
                      <FormErrorMessage>
                        {errors.nickName.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Flex>
            

                <Flex>

                <FormControl isInvalid={errors.address} mx={2}>
                  <FormLabel>address</FormLabel>
                  <Input
                    type="address"
                    required
                    placeholder="address"
                    variant="filled"
                    {...register("address")}
                  ></Input>
                  {errors.address && (
                    <FormErrorMessage>
                      {errors.address.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                  <FormControl isInvalid={errors.bic} mx={2}>
                    <FormLabel>bic</FormLabel>
                    <Input
                      {...register("bic")}
                      required
                      placeholder="bic"
                      variant="filled"
                      type="bic"
                    ></Input>
                    {errors.bic && (
                      <FormErrorMessage>{errors.bic.message}</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={errors.iban}>
                    <FormLabel>iban</FormLabel>
                    <Input
                      {...register("iban")}
                      required
                      placeholder="iban"
                      variant="filled"
                      type="iban"
                    ></Input>
                    {errors.iban && (
                      <FormErrorMessage>{errors.iban.message}</FormErrorMessage>
                    )}
                  </FormControl>

                  
        
                </Flex>

              </Stack>
              {/* <Button
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                    width="full"
                    my="8"
                    colorScheme="green"
                bg="#2DDCB1"

                    type="submit"
                  >
                    SE CONNECTER
                  </Button> */}
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onDeleteClose}>
                Cancel
              </Button>
              <Button colorScheme="green" type="submit">
                Cree
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

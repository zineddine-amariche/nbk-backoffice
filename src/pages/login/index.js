import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
  Stack,
  GridItem,
  Button,
  Checkbox,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useForm } from "react-hook-form";
import useStore from "store";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 10 },
};

setLocale(fr);

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
  .required();

export default function Login() {
  const login = useStore((state) => state.login);
  const toast = useToast();

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const res = await login(data);
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
  return (
    <Box bg="linear-gradient(to right, #2DDCB1, #ffff)" w="100%" h="100vh">
      <Flex align="center" justifyContent="center" h="100%">
        <motion.div
          variants={variants}
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }}
        >
          <Container maxW="6xl">
            <SimpleGrid
              overflow="hidden"
              shadow="lg"
              rounded="lg"
              bg="white"
              columns={2}
            >
              <GridItem p="8" colSpan={{ base: 2, md: 1 }}>
                <Flex m="4" justifyContent="center">
                  <Heading size="lg">Se connecter à votre compte</Heading>
                </Flex>
                <Text>lexoussoboiru-4108@yopmail.com</Text>
                <Text>M0oiuyt12@uiU</Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing={3}>
                    <FormControl isInvalid={errors.email}>
                      <FormLabel>Address e-mail</FormLabel>
                      <Input
                        type="email"
                        {...register("password")}
                        required
                        placeholder="Address e-mail"
                        variant="filled"
                        {...register("email")}
                      ></Input>
                      {errors.email && (
                        <FormErrorMessage>
                          {errors.email.message}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl isInvalid={errors.password}>
                      <FormLabel>Mot de passe</FormLabel>
                      <Input
                        {...register("password")}
                        required
                        placeholder="Mot de passe"
                        variant="filled"
                        type="password"
                      ></Input>
                      {errors.password && (
                        <FormErrorMessage>
                          {errors.password.message}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <Flex justifyContent="space-between">
                      <Checkbox colorScheme="green">
                        Se souvenir de moi
                      </Checkbox>
                      <Link to="/resetPassword">
                        <Text color="green.500">Mot de passe oublié ?</Text>
                      </Link>
                    </Flex>
                  </Stack>
                  <Button
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                    width="full"
                    my="8"
                    colorScheme="green"
                bg="#2DDCB1"

                    type="submit"
                  >
                    SE CONNECTER
                  </Button>
                </form>
              </GridItem>
              <GridItem
                overflow="hidden"
                bg="#2DDCB1"
                p="8"
                display={{ base: "none", md: "block" }}
                color="white"
              >
                <Flex
                  p="8"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  h="100%"
                >
                  <Heading size="2xl">Bienvenue parmi NOUS!</Heading>
                  <Text fontSize="xl">
                    s simply dummy text of the printing and typesetting
                    industry. Lorem
                  </Text>
                </Flex>
              </GridItem>
            </SimpleGrid>
          </Container>
        </motion.div>
      </Flex>
    </Box>
  );
}

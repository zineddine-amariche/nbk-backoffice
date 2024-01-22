import React from "react";
import Header from "components/header";
import Layout from "components/layout";
import {
  Box,
  Input,
  Select,
  FormControl,
  FormLabel,
  Button,
  Stack,
  SimpleGrid,
  GridItem,
  Flex,
  Container,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import useAdd from "../hooks/useAdd";
import ConfirmUser from "./ConfirmUser";

export default function AddUser() {
  const { register, handleSubmit, isSubmitting, onSubmit, errors, confirm } =
    useAdd();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Layout>
      <Header
        FilterForm={null}
        title={"Créer un utilisateur"}
        edit={true}
      ></Header>
      {confirm.form ? (
        <ConfirmUser confirm={confirm}></ConfirmUser>
      ) : (
        <Container>
          <Box p="4" bg="white" rounded="xl" shadow="xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid
                // columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 4, md: 6 }}
              >
                <FormControl isInvalid={errors.email}>
                  <FormLabel> Email</FormLabel>
                  <Input
                    type="email"
                    variant="filled"
                    placeholder="email"
                    {...register("email")}
                  ></Input>
                  {errors.email && (
                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel> Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      variant="filled"
                      {...register("password")}
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {/* <Input
                    type="password"
                    placeholder="password"
                    variant="filled"
                    {...register("password")}
                  ></Input> */}
                  {errors.password && (
                    <FormErrorMessage>
                      {errors.password.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.group}>
                  <FormLabel>Group</FormLabel>
                  <Select {...register("group")} variant="filled">
                    <option value={"User"}>User</option>
                  </Select>
                  {errors.group && (
                    <FormErrorMessage>{errors.group.message}</FormErrorMessage>
                  )}
                </FormControl>
              </SimpleGrid>
              <Flex my="8" justifyContent="flex-end">
                <Button
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                  type="submit"
                  colorScheme="green"
                >
                  Ajouter
                </Button>
              </Flex>
            </form>
          </Box>
        </Container>
      )}
    </Layout>
  );
}

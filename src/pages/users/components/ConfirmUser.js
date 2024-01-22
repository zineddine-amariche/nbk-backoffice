import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  SimpleGrid,
  Container,
  FormErrorMessage,
  HStack,
  useToast,
} from "@chakra-ui/react";
import useConfirm from "../hooks/useConfirm";
import useStore from "store";

export default function ConfirmUser({ confirm }) {
  const { register, handleSubmit, isSubmitting, onSubmit, errors } =
    useConfirm(confirm);
  const toast = useToast();
  const [resendCodeLoading, setResendCodeLoading] = useState(false);

  const resendCode = useStore((state) => state.resendCode);

  const handleResendCode = async () => {
    setResendCodeLoading(true);
    const res = await resendCode(confirm.email);
    if (res?.data?.status === "success") {
      setResendCodeLoading(false);
      toast({
        description: "opération terminée avec succès",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setResendCodeLoading(false);
      toast({
        description: "quelque chose s'est mal passé",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
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
                defaultValue={confirm?.email}
                type="email"
                variant="filled"
                placeholder="email"
                {...register("email")}
              ></Input>
              {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.code}>
              <FormLabel> Code</FormLabel>
              <Input
                variant="filled"
                placeholder="code"
                {...register("code")}
              ></Input>
              {errors.code && (
                <FormErrorMessage>{errors.code.message}</FormErrorMessage>
              )}
            </FormControl>
          </SimpleGrid>
          <HStack spacing={2} my="8" justifyContent="flex-end">
            <Button
              isLoading={resendCodeLoading}
              isDisabled={resendCodeLoading}
              onClick={handleResendCode}
            >
              Resend code
            </Button>
            <Button
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              type="submit"
              colorScheme="green"
            >
              Confirm
            </Button>
          </HStack>
        </form>
      </Box>
    </Container>
  );
}

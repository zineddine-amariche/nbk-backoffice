import React from 'react';
import {
  Box,
  Container,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
import useStore from 'store';

setLocale(fr);

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre'),
    code: yup.string().min(5).required(),
  })
  .required();

export default function Login() {
  const confirmForgetPassword = useStore((state) => state.confirmForgetPassword);
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const res = await confirmForgetPassword(data);
    if (res?.status === 200) {
      toast({
        description: 'opération terminée avec succès',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/');
    } else {
      toast({
        description: res?.data?.StatusDescription || "quelque chose s'est mal passé",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="linear-gradient(to right, #56ab2f, #a8e063)" w="100%" h="100vh">
      <Flex align="center" justifyContent="center" h="100%">
        <Container maxW="lg">
          <Box p="8" shadow="lg" rounded="lg" bg="white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel>Address e-mail</FormLabel>
                  <Input
                    type="email"
                    {...register('email')}
                    required
                    placeholder="Address e-mail"
                    variant="filled"
                  ></Input>
                  {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel>nouveau mot de passe</FormLabel>
                  <Input
                    type="password"
                    {...register('password')}
                    required
                    placeholder="nouveau mot de passe"
                    variant="filled"
                  ></Input>
                  {errors.password && (
                    <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.confirmPassword}>
                  <FormLabel>confirmer le nouveau mot de passe</FormLabel>
                  <Input
                    type="password"
                    {...register('confirmPassword')}
                    required
                    placeholder="confirmer le nouveau mot de passe"
                    variant="filled"
                  ></Input>
                  {errors.confirmPassword && (
                    <FormErrorMessage>{errors.confirmPassword.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.code}>
                  <FormLabel>code</FormLabel>
                  <Input {...register('code')} required placeholder="code" variant="filled"></Input>
                  {errors.code && <FormErrorMessage>{errors.code.message}</FormErrorMessage>}
                </FormControl>
              </Stack>
              <Button
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
                width="full"
                my="8"
                colorScheme="green"
                type="submit"
              >
                réinitialiser
              </Button>
            </form>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}

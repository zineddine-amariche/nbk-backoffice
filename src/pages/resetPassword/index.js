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
  })
  .required();

export default function Login() {
  const forgetPassword = useStore((state) => state.forgetPassword);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const res = await forgetPassword(data);
    if (res?.status === 200) {
      navigate('/confirmResetPassword');
    }
  };

  return (
    <Box bg="linear-gradient(to right, #56ab2f, #a8e063)" w="100%" h="100vh">
      <Flex align="center" justifyContent="center" h="100%">
        <Container maxW="lg">
          <Box p="8" shadow="lg" rounded="lg" bg="white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel>Address e-mail</FormLabel>
                  <Input
                    type="email"
                    {...register('email')}
                    required
                    placeholder="Address e-mail"
                    variant="filled"
                  ></Input>
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
                demander le code de réinitialisation
              </Button>
            </form>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}

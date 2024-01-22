import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Select,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import useLimit from "../hooks/useLimit";

const params = [
  "limitAtmYear",
  "limitAtmMonth",
  "limitAtmWeek",
  "limitAtmDay",
  "limitAtmAll",
  "limitPaymentYear",
  "limitPaymentMonth",
  "limitPaymentWeek",
  "limitPaymentDay",
  "limitPaymentAll",
  "paymentDailyLimit",
];
export default function Limit({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, isSubmitting, onSubmit, errors } =
    useLimit(id);
  const key = "limitPaymentAll";
  // console.log(errors[key]);
  return (
    <>
      <Text w="100%" onClick={onOpen}>
        Limit
      </Text>
      {/* <Button onClick={onOpen} size="sm" colorScheme="orange">
        limit
      </Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Limit</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              {params.map((param, i) => (
                <FormControl key={i} my="4" isInvalid={errors[param]}>
                  <FormLabel>{param}</FormLabel>
                  <Input
                    type="number"
                    variant="filled"
                    step="any"
                    placeholder={param}
                    {...register(param)}
                  ></Input>
                  {errors[param] && (
                    <FormErrorMessage>{errors[param].message}</FormErrorMessage>
                  )}
                </FormControl>
              ))}
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
                type="submit"
                colorScheme="green"
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

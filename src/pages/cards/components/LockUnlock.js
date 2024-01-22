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
  Text,
} from "@chakra-ui/react";
import useLockUnlock from "../hooks/useLockUnlock";

export default function LockUnlock({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, isSubmitting, onSubmit } = useLockUnlock(id);
  return (
    <>
      {/* <Button onClick={onOpen} size="sm" colorScheme="orange">
        lockUnlock
      </Button> */}
      <Text w="100%" onClick={onOpen}>
        Lock Unlock
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lock Unlock</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl>
                <FormLabel>lock status</FormLabel>
                <Select
                  variant="filled"
                  placeholder="lock status"
                  {...register("lockStatus")}
                >
                  <option value="0">Unblock the card</option>
                  <option value="1">Block the card</option>
                  <option value="2">Lost card</option>
                  <option value="3">Stolen card</option>
                </Select>
              </FormControl>
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

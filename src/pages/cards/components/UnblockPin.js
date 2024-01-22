import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import useStore from "store";

export default function UnblockPin({ id }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const cardUnblockPin = useStore((state) => state.cardUnblockPin);
  const getAllCards = useStore((state) => state.getAllCards);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const res = await cardUnblockPin(id);
    if (res.data.status === "success") {
      setLoading(false);
      await getAllCards();
      toast({
        description: "opération terminée avec succès",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setLoading(false);
      toast({
        description: "quelque chose s'est mal passé",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {/* <Button size="sm" colorScheme="orange" onClick={() => setIsOpen(true)}>
        unblockPin
      </Button> */}
      <Text w="100%" onClick={() => setIsOpen(true)}>
        Unblock Pin
      </Text>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Unblock Pin
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to unblock the pin?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button isDisabled={loading} ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isDisabled={loading}
                isLoading={loading}
                colorScheme="green"
                onClick={submit}
                ml={3}
              >
                Unblock
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

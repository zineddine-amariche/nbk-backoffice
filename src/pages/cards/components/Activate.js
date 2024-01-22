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
import ErrorHandler from "components/ErrorHandler";

export default function Activate({ id }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const cardActivate = useStore((state) => state.cardActivate);
  const getAllCards = useStore((state) => state.getAllCards);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const res = await cardActivate(id);
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
        description: <ErrorHandler res={res}></ErrorHandler>,
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
        Activate Card
      </Text>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Activate Card
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to activate the card?
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
                Activate
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

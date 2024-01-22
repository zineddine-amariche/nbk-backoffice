import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import useStore from "store";
export default function Delete({ id }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const toast = useToast();
  const deleteRestriction = useStore((state) => state.deleteRestriction);
  const getAllRestrictions = useStore((state) => state.getAllRestrictions);
  const deleteLoading = useStore((state) => state.restrictions.deleteLoading);

  const remove = async () => {
    const res = await deleteRestriction(id);
    if (res?.data?.status === "success") {
      await getAllRestrictions();
      onClose();
    } else {
      toast({
        title: "erreur de suppression",
        description: "quelque chose s'est mal passé",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box cursor="pointer" onClick={() => setIsOpen(true)}>
        <AiFillDelete style={{ fontSize: 26 }}></AiFillDelete>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              supprimer confirmation
            </AlertDialogHeader>

            <AlertDialogBody>
              Êtes-vous sûr de bien vouloir supprimer cet élément?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                isDisabled={deleteLoading}
                ref={cancelRef}
                onClick={onClose}
              >
                annuler
              </Button>
              <Button
                isDisabled={deleteLoading}
                isLoading={deleteLoading}
                colorScheme="red"
                onClick={remove}
                ml={3}
              >
                supprimer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

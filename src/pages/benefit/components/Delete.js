import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import useStore from 'store';
export default function Delete({ id }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const deleteBenefit = useStore((state) => state.deleteBenefit);

  //   const remove = async () => {
  //     deleteBenefit(id);
  //   };

  return (
    <>
      <Box cursor="pointer" onClick={() => setIsOpen(true)}>
        <AiFillDelete style={{ fontSize: 26 }}></AiFillDelete>
      </Box>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              supprimer confirmation
            </AlertDialogHeader>

            <AlertDialogBody>Êtes-vous sûr de bien vouloir supprimer cet élément?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                annuler
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                supprimer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

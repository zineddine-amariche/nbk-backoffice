import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
} from '@chakra-ui/react';
import { ImBlocked } from 'react-icons/im';
import useStore from 'store';

export default function AlertDialogExample({ userName }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const disableUser = useStore((state) => state.disableUser);
  const blockLoading = useStore((state) => state.users.blockLoading);
  const toast = useToast();

  const disable = async () => {
    // console.log('diable');
    const res = await disableUser({ userName });
    if (res?.data?.status === 'success') {
      toast({
        description: 'opération terminée avec succès',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        description: "quelque chose s'est mal passé",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const enable = () => {};

  return (
    <>
      <Button bg="black" _hover={{ bg: 'black' }}>
        <ImBlocked onClick={() => setIsOpen(true)} style={{ fontSize: 26 }}></ImBlocked>
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Disable User
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You want to disable user</AlertDialogBody>

            <AlertDialogFooter>
              <Button isDisabled={blockLoading} ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isDisabled={blockLoading}
                isLoading={blockLoading}
                colorScheme="red"
                onClick={disable}
                ml={3}
              >
                Disable
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

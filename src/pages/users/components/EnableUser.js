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
import { FaCheckCircle } from 'react-icons/fa';
import useStore from 'store';

export default function AlertDialogExample({ userName }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const enableUser = useStore((state) => state.enableUser);
  const blockLoading = useStore((state) => state.users.blockLoading);
  const toast = useToast();

  const enable = async () => {
    // console.log('diable');
    const res = await enableUser({ userName });
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

  return (
    <>
      <Button bg="black" _hover={{ bg: 'black' }}>
        <FaCheckCircle onClick={() => setIsOpen(true)} style={{ fontSize: 26 }}></FaCheckCircle>
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Enable User
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You want to enable user</AlertDialogBody>

            <AlertDialogFooter>
              <Button isDisabled={blockLoading} ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isDisabled={blockLoading}
                isLoading={blockLoading}
                colorScheme="green"
                onClick={enable}
                ml={3}
              >
                Enable
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

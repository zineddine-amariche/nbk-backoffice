import { useForm } from 'react-hook-form';
import useStore from 'store';
import { useToast } from '@chakra-ui/react';
export default function useFilter(id) {
  const toast = useToast();
  const cardLockUnlock = useStore((state) => state.cardLockUnlock);
  const getAllCards = useStore((state) => state.getAllCards);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(id, data);
    for (const key in data) {
      if (data[key] === '') {
        delete data[key];
      }
    }
    const res = await cardLockUnlock(id, data.lockStatus);
    if (res.data.status === 'success') {
      await getAllCards();
      toast({
        description: 'opération terminée avec succès',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        description: "quelque chose s'est mal passé",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  };
}

import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import useStore from 'store';

export default function useFilter(userId) {
  const editUser = useStore((state) => state.editUser);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    for (const key in data) {
      if (data[key] === '') {
        delete data[key];
      }
    }
    // console.log(data);
    const res = await editUser(userId, data);
    if (res?.data?.status === 'success') {
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

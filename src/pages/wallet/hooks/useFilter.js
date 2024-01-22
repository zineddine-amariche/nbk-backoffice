import { useForm } from 'react-hook-form';
import useStore from 'store';

export default function useFilter() {
  const getFilteredWallets = useStore((state) => state.getFilteredWallets);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    await getFilteredWallets(data);
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

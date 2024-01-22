import { useForm } from 'react-hook-form';
import useStore from 'store';

export default function useFilter(search) {
  const getFilteredTransfers = useStore((state) => state.getFilteredTransfers);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    let payload = { ...data, ...search };
    for (const key in payload) {
      if (payload[key] === '') {
        delete payload[key];
      }
    }
    await getFilteredTransfers(payload);
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

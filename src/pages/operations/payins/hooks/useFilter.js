import { useForm } from 'react-hook-form';
import useStore from 'store';

export default function useFilter() {
  const getFilteredPayins = useStore((state) => state.getFilteredPayins);
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
    await getFilteredPayins(data);
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

import { useForm } from 'react-hook-form';
import useStore from 'store';

export default function useFilter() {
  const getFilteredCards = useStore((state) => state.getFilteredCards);
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
    await getFilteredCards(data);
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

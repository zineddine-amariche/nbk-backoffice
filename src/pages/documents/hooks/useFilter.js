import { useForm } from 'react-hook-form';
import useStore from 'store';

export default function useFilter() {
  const getFilteredDocuments = useStore((state) => state.getFilteredDocuments);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    await getFilteredDocuments(data);
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

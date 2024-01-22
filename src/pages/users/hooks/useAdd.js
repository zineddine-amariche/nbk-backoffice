import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import useStore from "store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import ErrorHandler from "components/ErrorHandler";
setLocale(fr);

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    group: yup.string().required(),
  })
  .required();
export default function useAdd() {
  const [confirm, setConfirm] = useState({ form: false, email: null });
  const registerUser = useStore((state) => state.register);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    const res = await registerUser(data);
    console.log(res);
    if (res?.data?.status === "success") {
      setConfirm({ form: true, email: data?.email });
      toast({
        description: "opération terminée avec succès",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        description: <ErrorHandler res={res}></ErrorHandler>,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return {
    setConfirm,
    confirm,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  };
}

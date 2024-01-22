import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import useStore from "store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useNavigate } from "react-router-dom";
import ErrorHandler from "components/ErrorHandler";

setLocale(fr);

const schema = yup
  .object({
    email: yup.string().email().required(),
    code: yup.string().required(),
  })
  .required();
export default function useConfirm() {
  const confirmUser = useStore((state) => state.confirmUser);
  const toast = useToast();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    const res = await confirmUser(data);
    console.log(res);
    if (res?.data?.status === "success") {
      navigate("/users");
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
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  };
}

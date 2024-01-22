import { useForm } from "react-hook-form";
import useStore from "store";
import { useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import ErrorHandler from "components/ErrorHandler";
setLocale(fr);

const schema = yup.object({
  foreign: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  online: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  atm: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  nfc: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
});

export default function useOptions(id) {
  const toast = useToast();
  const cardOptions = useStore((state) => state.cardOptions);
  const getAllCards = useStore((state) => state.getAllCards);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    // console.log(id, data);
    for (const key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }
    const res = await cardOptions(id, data);
    if (res.data.status === "success") {
      await getAllCards();
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

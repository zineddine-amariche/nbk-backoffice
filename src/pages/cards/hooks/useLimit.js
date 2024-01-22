import { useForm } from "react-hook-form";
import useStore from "store";
import { useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
setLocale(fr);

const schema = yup.object({
  limitAtmYear: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitAtmMonth: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitAtmWeek: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitAtmDay: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitAtmAll: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitPaymentYear: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitPaymentMonth: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitPaymentWeek: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitPaymentDay: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  limitPaymentAll: yup
    .number()
    .integer()
    .transform((cv, ov) => {
      return ov === "" ? undefined : cv;
    }),
  paymentDailyLimit: yup.number().transform((cv, ov) => {
    return ov === "" ? undefined : cv;
  }),
});

export default function useLimit(id) {
  const toast = useToast();
  const cardLimits = useStore((state) => state.cardLimits);
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
    const res = await cardLimits(id, data);
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
        description: "quelque chose s'est mal passé",
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

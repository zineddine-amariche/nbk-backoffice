import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import useStore from "store";

export default function useFilter() {
  const [searchParams] = useSearchParams();
  const walletId = searchParams.get("walletId");
  const getFilteredTransactions = useStore(
    (state) => state.getFilteredTransactions
  );

  const getAllWallets = useStore((state) => state.getAllWallets);
  const wallets = useStore((state) => state.wallets.wallets);

  useEffect(() => {
    getAllWallets();
  }, [getAllWallets]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    for (const key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }
    let params;

    if (walletId) {
      params = { walletId, ...data };
    } else {
      params = { ...data };
    }
    await getFilteredTransactions(params);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
    wallets,
  };
}

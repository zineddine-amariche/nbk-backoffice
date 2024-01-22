import React from "react";
import {
  Select,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Box,
} from "@chakra-ui/react";
import useFilter from "../hooks/useFilter";

export default function Filter() {
  const { register, handleSubmit, isSubmitting, onSubmit, wallets } =
    useFilter();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: "column", md: "row" }}>
        <FormControl>
          <FormLabel>sortBy</FormLabel>
          <Select variant="filled" {...register("sortBy")}>
            <option value={""}>none</option>
            <option value={"createdDate"}>createdDate</option>
            <option value={"createdDateFrom"}>createdDateFrom</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>sortOrder</FormLabel>
          <Select variant="filled" {...register("sortOrder")}>
            <option value={""}>none</option>
            <option value={"DESC"}>DESC</option>
            <option value={"ASC"}>ASC</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Transaction Type</FormLabel>
          <Select variant="filled" {...register("transactionType")}>
            <option value={""}>none</option>
            <option value={"Payin"}>Payin</option>
            <option value={"Payout"}>Payout</option>
            <option value={"Transfer"}>Transfer</option>
            <option value={"Transfer Refund"}>Transfer Refund</option>
            <option value={"Payin Refund"}>Payin Refund</option>
            <option value={"Discount"}>Discount</option>
            <option value={"Bill"}>Bill</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>walletId</FormLabel>
          <Select variant="filled" {...register("walletId")}>
            <option value={""}>none</option>
            {wallets?.map((wallet) => (
              <option key={wallet.walletId} value={wallet.walletId}>
                {wallet.walletId}
              </option>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Box m="4" display="flex" justifyContent="flex-end">
        <Button
          colorScheme="blue"
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
          type="submit"
        >
          apply
        </Button>
      </Box>
    </form>
  );
}

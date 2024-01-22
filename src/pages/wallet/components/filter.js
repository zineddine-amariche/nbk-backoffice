import React from 'react';
import { Select, FormControl, FormLabel, Button, Stack, Box, Input } from '@chakra-ui/react';
import useFilter from '../hooks/useFilter';

export default function Filter() {
  const { register, handleSubmit, isSubmitting, onSubmit } = useFilter();
  const queries = [
    "userId",
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: 'column', md: 'row' }}>
      {queries.map((query, i) => (
          <FormControl
            m={{ base: "none", md: "" }}
            my={{ base: "" }}
            flex={{ base: "none", md: "1 0 21%" }}
            key={i}
          >
            <FormLabel>{query}</FormLabel>
            <Input
              placeholder={query}
              variant="filled"
              {...register(query)}
            ></Input>
          </FormControl>
        ))}
        <FormControl>
          <FormLabel>walletStatus</FormLabel>
          <Select variant="filled" {...register('walletStatus', { required: true })}>
            <option value="validated">validé</option>
            <option value="pending">en attendant</option>
            <option value="canceled">annulé</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>walletTypeId</FormLabel>
          <Select variant="filled" {...register('walletTypeId', { required: true })}>
            <option value={9}>Electronic Money Wallet</option>
            <option value={10}>Payment Account Wallet</option>
            <option value={13}>Mirror Wallet</option>
            <option value={14}>Electronic Money Card (Internal only)</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>sortBy</FormLabel>
          <Select variant="filled" {...register('sortBy', { required: true })}>
            <option value={'createdDate'}>createdDate</option>
            <option value={'walletId'}>walletId</option>
            <option value={'walletTypeId'}>walletTypeId</option>
            <option value={'userId'}>userId</option>
            <option value={'payinCount'}>payinCount</option>
            <option value={'payoutCount'}>payoutCount</option>
            <option value={'currency'}>currency</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>sortOrder</FormLabel>
          <Select variant="filled" {...register('sortOrder', { required: true })}>
            <option value={'DESC'}>DESC</option>
            <option value={'ASC'}>ASC</option>
          </Select>
        </FormControl>
      </Stack>

      <Box m="4" display="flex" justifyContent="flex-end">
        <Button colorScheme="blue" isLoading={isSubmitting} isDisabled={isSubmitting} type="submit">
          apply
        </Button>
      </Box>
    </form>
  );
}

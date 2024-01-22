import React from 'react';
import { Select, FormControl, FormLabel, Button, Stack, Box } from '@chakra-ui/react';
import useFilter from '../hooks/useFilter';

export default function Filter() {
  const { register, handleSubmit, isSubmitting, onSubmit } = useFilter();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <FormControl>
          <FormLabel>documentStatus</FormLabel>
          <Select variant="filled" {...register('documentStatus', { required: true })}>
            <option value="validated">validé</option>
            <option value="pending">en attendant</option>
            <option value="canceled">annulé</option>
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

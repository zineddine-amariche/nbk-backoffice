import React from 'react';
import { Select, FormControl, FormLabel, Button, Stack, Box, Input } from '@chakra-ui/react';
import useFilter from '../hooks/useFilter';

export default function Filter() {

  const queries = [
    "userId",
  ];
  const { register, handleSubmit, isSubmitting, onSubmit } = useFilter();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: 'column', md: 'row', }}>
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
          <FormLabel>lockStatus</FormLabel>
          <Select variant="filled" {...register('lockStatus')}>
            <option value={''}>none</option>
            <option value={0}>Card Unblocked</option>
            <option value={1}>Card blocked</option>
            <option value={2}>Lost card</option>
            <option value={3}>Stolen card</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>isPhysical</FormLabel>
          <Select variant="filled" {...register('isPhysical')}>
            <option value={''}>none</option>
            <option value={0}>Physical card</option>
            <option value={1}>Virtual card</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>isConverted</FormLabel>
          <Select variant="filled" {...register('isConverted')}>
            <option value={''}>none</option>
            <option value={0}>Physical card converted in a virtual card</option>
            <option value={1}>Not converted</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>sortBy</FormLabel>
          <Select variant="filled" {...register('sortBy')}>
            <option value={''}>none</option>
            <option value={'createdDate'}>createdDate</option>
            <option value={'createdDateFrom'}>createdDateFrom</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>sortOrder</FormLabel>
          <Select variant="filled" {...register('sortOrder')}>
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

import React from 'react';
import { Container, Button, Input, Heading, Box } from '@chakra-ui/react';

export default function filter({ FilterForm }) {
  return (
    <Container mt="4" maxW="8xl">
      <Box my="8" p="4" bg="white" rounded="xl" shadow="xl">
        <FilterForm></FilterForm>
      </Box>
    </Container>
  );
}

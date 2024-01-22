import { Container } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Table from 'components/table';
import LoadingTable from 'components/loadingTable';
import Header from 'components/header';
import Layout from 'components/layout';
import useGetTransfers from './hooks/useGetTransfers';
import Filter from './components/filter';
export default function Transfers() {
  let search;
  let location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  // console.log(location);
  // console.log(queryParams);
  for (const [key, value] of queryParams) {
    // console.log({ [key]: value });
    search = { [key]: value };
  }

  const { transfers, transferColumns, transferLoading } = useGetTransfers(search);

  return (
    <Layout>
      <Header search={search} FilterForm={Filter} title="Gestion des Transfers"></Header>
      <Container maxW="8xl">
        {transferLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table columns={transferColumns} data={transfers || []}></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

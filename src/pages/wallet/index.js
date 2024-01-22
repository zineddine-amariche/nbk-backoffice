import { Container } from '@chakra-ui/react';
import Table from 'components/table';
import LoadingTable from 'components/loadingTable';
import Header from 'components/header';
import Layout from 'components/layout';
import useGetWallets from './hooks/useGetWallets';
import Filter from './components/filter';
export default function Contacts() {
  const { wallets, walletColumns, walletLoading } = useGetWallets();

  return (
    <Layout>
      <Header FilterForm={Filter} title="Gestion des Portefeuille"
        users={wallets}
        fileName={"ExcelFile-wallets"}
      
      ></Header>
      <Container maxW="8xl">
        {walletLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table columns={walletColumns} data={wallets || []}></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

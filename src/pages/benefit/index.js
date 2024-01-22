import { Container } from '@chakra-ui/react';
import Table from 'components/table';
import LoadingTable from 'components/loadingTable';
import Header from 'components/header';
import Layout from 'components/layout';
import useGetBenefits from './hooks/useGetBenefits';
import Filter from './components/filter';
export default function Contacts() {
  const { benefits, benefitColumns, benefitLoading } = useGetBenefits();
console.log('benefits', benefits)
  return (
    <Layout>
      <Header
        FilterForm={Filter}
        title="Gestion des Beneficiaries"
        users={benefits}
        fileName={"ExcelFile-benefits"}
      ></Header>
      <Container maxW="8xl">
        {benefitLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table columns={benefitColumns} data={benefits || []}></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

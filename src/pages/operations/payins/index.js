import { Container } from "@chakra-ui/react";
import Table from "components/table";
import LoadingTable from "components/loadingTable";
import Header from "components/header";
import Layout from "components/layout";
import useGetPayins from "./hooks/useGetPayins";
import Filter from "./components/filter";
export default function Contacts() {
  const { payins, payinColumns, payinLoading } = useGetPayins();

  return (
    <Layout>
      <Header
        FilterForm={Filter}
        title="Gestion des Cartes"
        users={payins}
        fileName={"ExcelFile-payins"}
      ></Header>
      <Container maxW="8xl">
        {payinLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table columns={payinColumns} data={payins || []}></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

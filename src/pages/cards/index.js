import { Container } from "@chakra-ui/react";
import Table from "components/table";
import LoadingTable from "components/loadingTable";
import Header from "components/header";
import Layout from "components/layout";
import useGetCards from "./hooks/useGetCards";
import Filter from "./components/filter";
export default function Contacts() {
  const { cards, cardColumns, cardLoading } = useGetCards();

  return (
    <Layout>
      <Header
        FilterForm={Filter}
        title="Gestion des Cartes"
        users={cards}
        fileName={"ExcelFile-cards"}
      ></Header>
      <Container maxW="8xl">
        {cardLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table columns={cardColumns} data={cards || []}></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

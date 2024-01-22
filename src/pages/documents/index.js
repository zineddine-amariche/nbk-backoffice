import { Container } from "@chakra-ui/react";
import Table from "components/table";
import LoadingTable from "components/loadingTable";
import Header from "components/header";
import Layout from "components/layout";
import useGetDocuments from "./hooks/useGetDocuments";
import Filter from "./components/filter";
export default function Documents() {
  const { documents, documentColumns, documentLoading } = useGetDocuments();

  return (
    <Layout>
      <Header
        FilterForm={Filter}
        title="Gestion des Document"
        users={documents}
        fileName={"ExcelFile-documents"}
      ></Header>
      <Container maxW="8xl">
        {documentLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table columns={documentColumns} data={documents || []}></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

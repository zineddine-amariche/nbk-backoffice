import React from "react";
import Layout from "components/layout";
import Header from "components/header";
import useGeRestrictions from "./Hooks/useGetrestriction";
import { Container } from "@chakra-ui/react";
import LoadingTable from "components/loadingTable";
import Table from 'components/table';

function Restrictions() {
  const {restrictionsLoading , restrictions, col  } = useGeRestrictions();
  // console.log("firstss", restrictions, col);

  return (
    <Layout>
      <Header
        // FilterForm={Filter}
        title={"Gestion des Restrictions"}
        edit={false}
        users={restrictions}
        fileName={"ExcelFile-Restrictions"}
      ></Header>
      <Container maxW="8xl">
        {restrictionsLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table
              columns={col}
              data={restrictions || []}
            ></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default Restrictions;

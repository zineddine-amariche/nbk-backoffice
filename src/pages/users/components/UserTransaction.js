import React from "react";
import { Container } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import useUserTransactions from "../hooks/useUserTransactions";
import Header from "components/header";
import Layout from "components/layout";
import Table from "components/table";
import LoadingTable from "components/loadingTable";

export default function UserTransaction() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const { transactions, transactionColumns, transactionLoading } =
    useUserTransactions({
      userId,
    });
  return (
    <Layout>
      <Header
        // Actions={Actions}
        // FilterForm={Filter}
        title={"User transactions"}
        edit={true}
      ></Header>
      <Container maxW="8xl">
        {transactionLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table
              columns={transactionColumns}
              data={transactions || []}
            ></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}

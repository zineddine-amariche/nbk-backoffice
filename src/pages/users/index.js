import { Container, Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import Table from "components/table";

import LoadingTable from "components/loadingTable";
import Header from "components/header";
import Layout from "components/layout";
import useGetUsers from "./hooks/useGetUsers";
import Filter from "./components/filter";
import Edite from "./components/Edite";
import Actions from "./components/Actions";
export default function Users() {
  const {
    users,
    userColumns,
    userLoading,
    userId,
    user,
    getSingleLoading,
  } = useGetUsers();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const display = (cell) => {
    if (
      cell.column.Header === "Beneficiare" ||
      cell.column.Header === "actions"
    ) {
      return;
    } else {
      // setOriginale(row.original);
      onOpen();
    }
  };
  return (
    <Layout>
      <Header
        // Actions={Actions}
        FilterForm={Filter}
        title={userId ? "Éditer Un Utilisateur" : "Gestion des Utilisateurs"}
        edit={userId ? true : false}
        users={users}
        fileName={"ExcelFile-Users"}
      ></Header>
      <Container maxW="8xl">
        {userId ? (
          <>
            {getSingleLoading ? (
              <Flex justifyContent="center">
                <Spinner></Spinner>
              </Flex>
            ) : (
              <Edite userId={userId} user={user}></Edite>
            )}
          </>
        ) : (
          <>
            {userLoading ? (
              <LoadingTable></LoadingTable>
            ) : (
              <>
                <Table
                  columns={userColumns}
                  data={users || []}
                  display={display}
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                ></Table>
              </>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

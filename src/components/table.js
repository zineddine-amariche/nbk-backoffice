/* eslint-disable react/display-name */
import { useTable, usePagination } from "react-table";
import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Button,
  Input,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import UseDrawer from "pages/users/useDrawer";
// import makeData from './makeData';

function DashTable({ columns, data, display, isOpen, onOpen, onClose }) {
  // console.log("dataaaa", data);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );
  const [Originale, setOriginale] = useState(null);

  return (
    <>
      <Table
        // variant="striped"
        colorScheme="gray"
        rounded="xl"
        shadow="xl"
        bg="white"
        {...getTableProps()}
        overflow="hidden"
      >
        <Thead overflow="hidden">
          {headerGroups.map((headerGroup, i) => (
            <Tr
              overflow="hidden"
              key={i}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, i) => (
                <Th
                  bg="gray.200"
                  color="gray.900"
                  //   fontSize="md"
                  key={i}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr
                key={i}
                {...row.getRowProps()}
                cursor={"pointer"}
                _hover={{ bg: "teal.50" }}
                onClick={() => {
                  // console.log("cloic", row);
                  setOriginale(row.original);
                  // onOpen();
                }}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <Td
                      key={i}
                      {...cell.getCellProps()}
                      onClick={() => display(cell)}
                    >
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
        {Originale && (
          <UseDrawer
            original={Originale}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        )}
      </Table>

      {!data.length && (
        <Flex w="full" p="16" justifyContent="center" alignItems="center">
          il n'y a pas de données
        </Flex>
      )}
      <Box my="4" bg="white" rounded="xl" shadow="xl" p="2">
        <Stack direction={{ base: "column", md: "row" }}>
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </Button>{" "}
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </Button>{" "}
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </Button>{" "}
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </Button>{" "}
          <Flex alignItems="center" justifyContent="center">
            <Box mx="2">
              Page{" "}
              <strong>
                {pageIndex + 1} de {pageOptions.length}
              </strong>{" "}
            </Box>
            <Box mx="2"> | Aller à la page: </Box>
            <Input
              mx="2"
              variant="filled"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              w="100px"
            />
          </Flex>{" "}
          <Select
            variant="filled"
            w="150px"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Afficher {pageSize}
              </option>
            ))}
          </Select>
        </Stack>
      </Box>
    </>
  );
}

function App({ columns, data, display, isOpen, onOpen, onClose }) {
  // console.log("dataaaa", data);

  return (
    <Box w="100%" overflowX="auto" overflowY="hidden">
      {true && (
        <DashTable
          columns={columns}
          data={data}
          display={display}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
    </Box>
  );
}

export default App;

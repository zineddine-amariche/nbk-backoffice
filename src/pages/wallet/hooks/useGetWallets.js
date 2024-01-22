import { useEffect, useMemo } from "react";
import { Badge, Text } from "@chakra-ui/react";
import useStore from "store";
import { Link } from "react-router-dom";
export default function useGetWallets() {
  const getLoading = useStore((state) => state.wallets.getLoading);
  const wallets = useStore((state) => state.wallets.wallets);
  const getAllWallets = useStore((state) => state.getAllWallets);
  useEffect(() => {
    getAllWallets();
  }, [getAllWallets]);
  const walletColumns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "walletId",
      },
      {
        Header: "type id",
        accessor: "walletTypeId",
      },
      {
        Header: "user id",
        accessor: "userId",
      },
      {
        Header: "pay in count",
        accessor: "payinCount",
      },
      {
        Header: "pay out count",
        accessor: "payoutCount",
      },
      {
        Header: "currency",
        accessor: "currency",
      },
      {
        Header: "status",
        accessor: "status",
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.walletStatus === "PENDING" && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.walletStatus === "VALIDATED" && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.walletStatus === "CANCELED" && (
                <Badge variant="solid" colorScheme="red">
                  annulé
                </Badge>
              )}
            </>
          );
        },
      },
      {
        accessor: "links",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <Text color="purple.500" fontWeight="bold" cursor="pointer">
                <Link to={`/transactions?walletId=${original.walletId}`}>
                  transactions
                </Link>
              </Text>
            </>
          );
        },
      },
    ],
    []
  );
  return { walletLoading: getLoading, wallets, walletColumns };
}

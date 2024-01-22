import { useEffect, useMemo } from 'react';
import { Badge } from '@chakra-ui/react';
import useStore from 'store';

export default function useGetTransfer(search) {
  const getLoading = useStore((state) => state.transfers.getLoading);
  const transfers = useStore((state) => state.transfers.transfers);
  const getAllTransfers = useStore((state) => state.getAllTransfers);
  useEffect(() => {
    getAllTransfers(search);
  }, [getAllTransfers]);
  const transferColumns = useMemo(
    () => [
      {
        Header: 'Id ',
        accessor: 'transferId',
      },
      {
        Header: 'transferDate',
        accessor: 'transferDate',
      },
      {
        Header: 'amount',
        accessor: 'amount',
      },
      {
        Header: 'currency',
        accessor: 'currency',
      },

      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.transferStatus === 'PENDING' && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.transferStatus === 'VALIDATED' && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.transferStatus === 'CANCELED' && (
                <Badge variant="solid" colorScheme="red">
                  annulé
                </Badge>
              )}
            </>
          );
        },
      },
    ],
    []
  );
  return { transferLoading: getLoading, transfers, transferColumns };
}

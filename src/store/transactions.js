import Axios from "api";

const transactions = (set, get) => ({
  transactions: {
    transactions: null,
    getLoading: false,
  },

  getAllTransactions: async (paramaters) => {
    set({
      transactions: { ...get().transactions, getLoading: true },
    });
    const params = { pageCount: 10, ...paramaters };

    try {
      const res = await Axios.get(`/transactions`, { params });
      // console.log(res);
      set({
        transactions: {
          ...get().transactions,
          transactions: res?.data?.data?.transactions,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getUserTransactions: async ({ userId, ...paramaters }) => {
    set({
      transactions: { ...get().transactions, getLoading: true },
    });
    const params = { pageCount: 10, ...paramaters };

    try {
      const res = await Axios.get(`/transactions/operations/${userId}`, {
        params,
      });
      // console.log(res);
      set({
        transactions: {
          ...get().transactions,
          transactions: res?.data?.data?.transactions,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredTransactions: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      transactions: { ...get().transactions, getLoading: true },
    });
    try {
      const res = await Axios.get(`/transactions`, { params });
      // console.log(res);
      set({
        transactions: {
          ...get().transactions,
          transactions: res?.data?.data?.transactions,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default transactions;

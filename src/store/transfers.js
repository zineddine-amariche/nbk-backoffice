import Axios from "api";

const transfer = (set, get) => ({
  transfers: {
    transfers: null,
    getLoading: false,
  },

  getAllTransfers: async (query) => {
    set({
      transfers: { ...get().transfers, getLoading: true },
    });
    const params = {
      ...query,
      pageCount: 2,
    };
    try {
      const res = await Axios.get(`/transfers`, { params });
      // console.log(res);
      set({
        transfers: {
          ...get().transfers,
          transfers: res?.data?.data?.transfers,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredTransfers: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      transfers: { ...get().transfers, getLoading: true },
    });
    try {
      const res = await Axios.get(`/transfers`, { params });
      // console.log(res);
      set({
        transfers: {
          ...get().transfers,
          transfers: res?.data?.data?.transfers,
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

export default transfer;

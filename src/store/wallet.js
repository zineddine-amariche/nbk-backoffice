import Axios from "api";

const wallet = (set, get) => ({
  wallets: {
    wallets: null,
    getLoading: false,
  },

  getAllWallets: async (parameters) => {
    const params = {
      walletTypeId: 9,
      pageCount: 2,
    };
    set({
      wallets: { ...get().wallets, getLoading: true },
    });
    try {
      const res = await Axios.get(`/wallets`, { params: parameters || params });
      // console.log(res);
      set({
        wallets: {
          ...get().wallets,
          wallets: res?.data?.data?.wallets,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredWallets: async (payload) => {
    const params = {
      walletTypeId: 9,
      ...payload,
    };
    set({
      wallets: { ...get().wallets, getLoading: true },
    });
    try {
      const res = await Axios.get(`/wallets`, { params });
      // console.log(res);
      set({
        wallets: {
          ...get().wallets,
          wallets: res?.data?.data?.wallets,
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

export default wallet;

import Axios from "api";

const payins = (set, get) => ({
  payins: {
    payins: null,
    getLoading: false,
  },

  getAllPayins: async () => {
    set({
      payins: { ...get().payins, getLoading: true },
    });
    const params = { pageCount: 2 };

    try {
      const res = await Axios.get(`/payins`, { params });
      // console.log(res);
      set({
        payins: {
          ...get().payins,
          payins: res?.data?.data?.payins,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredPayins: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      payins: { ...get().payins, getLoading: true },
    });
    try {
      const res = await Axios.get(`/payins`, { params });
      // console.log(res);
      set({
        payins: {
          ...get().payins,
          payins: res?.data?.data?.payins,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  deletePayin: async (id) => {
    try {
      const res = await Axios.delete(`/payins/${id}`);
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default payins;

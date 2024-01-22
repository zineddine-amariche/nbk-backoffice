import Axios from "api";

const benefits = (set, get) => ({
  benefits: {
    benefits: null,
    getLoading: false,
  },

  getAllBenefits: async () => {
    set({
      benefits: { ...get().benefits, getLoading: true },
    });
    const params = { pageCount: 10 };

    try {
      const res = await Axios.get(`/beneficiaries`, { params });
      // console.log(res);
      set({
        benefits: {
          ...get().benefits,
          benefits: res?.data?.data?.beneficiaries,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredBenefits: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      benefits: { ...get().benefits, getLoading: true },
    });
    try {
      const res = await Axios.get(`/beneficiaries`, { params });
      // console.log(res);
      set({
        benefits: {
          ...get().benefits,
          benefits: res?.data?.data?.beneficiaries,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  deleteBenefit: async (id) => {
    try {
      const res = await Axios.delete(`/beneficiaries/${id}`);
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  createBenifits: async (data) => {
    try {
      const res = await Axios.post(`/beneficiaries`,data);
      console.log('data*****',data);
      console.log('createBenifits*****',res?.data);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default benefits;

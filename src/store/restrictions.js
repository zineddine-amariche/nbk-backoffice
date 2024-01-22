import Axios from "api";

const restrictions = (set, get) => ({
  restrictions: {
    restriction: null,
    getLoading: false,
    getSingleLoading: false,
    singlRestriction:[],
    deleteLoading:false
  },

  getAllRestrictions: async () => {
    set({
      restrictions: { ...get().restrictions, getLoading: true },
    });
    // const params = { pageCount: 2 };

    try {
      const res = await Axios.get(`/countryRestrictionGroups`);
      // console.log("countryRestrictionGroups",res?.data?.data.countryRestrictionGroups);
      set({
        restrictions: {
          ...get().restrictions,
          restriction: res?.data?.data.countryRestrictionGroups,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getRestriction: async (id) => {
    set({
      restrictions: { ...get().restrictions, getSingleLoading: true },
    });
    try {
      const res = await Axios.get(`/countryRestrictionGroups/${id}`);
      // console.log('res', res)
      set({
        restrictions: {
          ...get().restrictions,
          singlRestriction: res?.data?.data?.countryRestrictionGroup,
          getSingleLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  deleteRestriction: async (id) => {
    set({
      restrictions: { ...get().restrictions, deleteLoading: true },
    });
    try {
      const res = await Axios.delete(`/countryRestrictionGroups/${id}`);
      console.log("deleteRestriction",res);
      set({
        restrictions: {
          ...get().restrictions,

          deleteLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      set({
        restrictions: {
          ...get().restrictions,

          deleteLoading: false,
        },
      });
      return error.response;
    }
  },
});

export default restrictions;

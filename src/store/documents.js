import Axios from "api";

const document = (set, get) => ({
  documents: {
    documents: null,
    getLoading: false,
    deleteLoading: false,
  },

  getAllDocuments: async () => {
    set({
      documents: { ...get().documents, getLoading: true },
    });
    const params = { pageCount: 10 };

    try {
      const res = await Axios.get(`/documents`, { params });
      // console.log(res);
      set({
        documents: {
          ...get().documents,
          documents: res?.data?.data?.documents,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredDocuments: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      documents: { ...get().documents, getLoading: true },
    });
    try {
      const res = await Axios.get(`/documents`, { params });
      // console.log(res);
      set({
        documents: {
          ...get().documents,
          documents: res?.data?.data?.documents,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  deleteDocument: async (id) => {
    set({
      documents: { ...get().documents, deleteLoading: true },
    });
    try {
      const res = await Axios.delete(`/documents/${id}`);
      console.log("delete document", res);
      set({
        documents: {
          ...get().documents,

          deleteLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      set({
        documents: {
          ...get().documents,

          deleteLoading: false,
        },
      });
      return error.response;
    }
  },
});

export default document;

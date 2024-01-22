import Axios from "api";
import { useState } from "react";
import produce from "immer";

const users = (set, get) => ({
  users: {
    users: null,
    user: null,
    getLoading: false,
    getSingleLoading: false,
    kycreviewLoading: { loading: false, userId: null },
    kyclivenessLoading: { loading: false, userId: null },
    blockLoading: false,
    // kdramas: [],
  },

  getAllUsers: async () => {
    set({
      users: { ...get().users, getLoading: true },
    });
    const params = { pageCount: 10 };
    try {
      const res = await Axios.get(`/users`, { params });
      // console.log(res);
      set({
        users: {
          ...get().users,
          users: res?.data?.data?.users,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  disableUser: async (body) => {
    // console.log("body", body);
    set({
      users: { ...get().users, blockLoading: true },
    });
    try {
      const res = await Axios.post(`/users/disable`, body);
      // console.log("disble user", res);

      set({
        users: { ...get().users, blockLoading: false },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      set({
        users: { ...get().users, blockLoading: false },
      });
      return error.response;
    }
  },
  enableUser: async (body) => {
    set({
      users: { ...get().users, blockLoading: true },
    });

    try {
      const res = await Axios.post(`/users/enable`, body);
      // console.log("enable user", res);
      set({
        users: { ...get().users, blockLoading: false },
      });

      return res;
    } catch (error) {
      console.log(error.response);
      set({
        users: { ...get().users, blockLoading: false },
      });
      return error.response;
    }
  },
  getUser: async (id) => {
    set({
      users: { ...get().users, getSingleLoading: true },
    });
    try {
      const res = await Axios.get(`/users/${id}`);
      set({
        users: {
          ...get().users,
          user: res?.data?.data?.users,
          getSingleLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  // addUsers: (payload) =>
  //   set(
  //     produce((draft) => {
  //       draft.kdramas.push({
  //         usersAdd: payload,
  //       });
  //     })
  //   ),
  getFilteredUsers: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      users: { ...get().users, getLoading: true },
    });
    try {
      const res = await Axios.get(`/users`, { params });
      // console.log("usersss", res);
      set({
        users: {
          ...get().users,
          users: res?.data?.data?.users,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  editUser: async (id, payload) => {
    const params = {
      ...payload,
    };
    // console.log("edit params", params);

    try {
      const res = await Axios.put(`/users/${id}`, {}, { params });
      // console.log("edit user response", res);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  updateKycReview: async (id) => {
    set({
      users: {
        ...get().users,
        kycreviewLoading: { loading: true, userId: id },
      },
    });
    try {
      const res = await Axios.put(`/users/${id}/kycreview`);
      // console.log("put kycreview response", res);
      set({
        users: {
          ...get().users,
          kycreviewLoading: { loading: false, userId: null },
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      set({
        users: {
          ...get().users,
          kycreviewLoading: { loading: false, userId: null },
        },
      });
      return error.response;
    }
  },
  updateKycLiveness: async (id) => {
    set({
      users: {
        ...get().users,
        kyclivenessLoading: { loading: true, userId: id },
      },
    });
    try {
      const res = await Axios.put(`/users/${id}/kycliveness`);
      // console.log("put kycliveness response", res);
      set({
        users: {
          ...get().users,
          kyclivenessLoading: { loading: false, userId: null },
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      set({
        users: {
          ...get().users,
          kyclivenessLoading: { loading: false, userId: null },
        },
      });
      return error.response;
    }
  },
});

export default users;

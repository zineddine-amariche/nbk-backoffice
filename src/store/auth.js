import Axios from "api";

const auth = (set, get) => ({
  auth: {
    isLoggedIn: false,
    appInfo: null,
    appLoading: false,
    loginInfo: null,
    resendCodeLoading: false,
  },
  logout: () => {
    set({
      auth: {
        ...get().auth,
        isLoggedIn: false,
        appInfo: null,
        loginInfo: null,
      },
    });
  },
  getAppToken: async () => {
    set({
      auth: { ...get().auth, appLoading: true },
    });
    try {
      const res = await Axios.get(
        `/authentication/oauth2/token/${process.env.REACT_APP_CLIENTID}/${process.env.REACT_APP_CLIENT_SECRET}`
      );
      set({
        auth: { ...get().auth, appInfo: res.data.data, appLoading: false },
      });
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  login: async ({ email, password }) => {
    try {
      const res = await Axios.post(`/admin/authentication/admins`, {
        userName: email,
        userPassword: password,
      });
      // console.log('data*****',res?.data);
      set({
        auth: { ...get().auth, loginInfo: res.data.data, isLoggedIn: true },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  register: async (body) => {
    try {
      const res = await Axios.post(`/registration/users`, body);
      // console.log('data*****',res?.data);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  confirmUser: async ({ email, code }) => {
    try {
      const res = await Axios.get(
        `/registration/users/confirmation/${email}/${code}`
      );

      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  resendCode: async (email) => {
    try {
      set({
        auth: { ...get().auth, resendCodeLoading: true },
      });
      const res = await Axios.get(
        `/registration/users/resend/${email}/confirmationcode`
      );
      set({
        auth: { ...get().auth, resendCodeLoading: false },
      });
      return res;
    } catch (error) {
      set({
        auth: { ...get().auth, resendCodeLoading: false },
      });
      console.log(error.response);
      return error.response;
    }
  },
  forgetPassword: async ({ email }) => {
    try {
      const res = await Axios.get(
        `/authentication/forgot/password/users/${email}`
      );
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  confirmForgetPassword: async ({ email, password, code }) => {
    try {
      const res = await Axios.get(
        `/authentication/confirm/forgotPassword/users/${email}/${password}/${code}`
      );
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default auth;

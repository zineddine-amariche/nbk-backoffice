import Axios from "api";

const channels = (set, get) => ({
  channels: {
    channels: null,
    getLoading: false,
    getSingleLoading: false,
    messages: null,
    nombre: null,
    userSelected: null,
    LoadingUserSelected: false,
    ChannelSelected: null,
    LoadingChannelSelected: false,
    messagesSend: null,
    refresh: false,
  },

  getAllChannels: async () => {
    set({
      channels: { ...get().channels, getLoading: true },
    });
    const params = { pageCount: 10 };

    try {
      const res = await Axios.get(`/channels`, { params });
      // console.log("channels", res.data.data.channels);

      set({
        channels: {
          ...get().channels,
          channels: res?.data?.data?.channels,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getMessages: async (id) => {
    set({
      channels: { ...get().channels, getSingleLoading: true },
    });
    try {
      const res = await Axios.get(`/messages/${id}/channels`);
      // console.log("res", res);
      set({
        channels: {
          ...get().channels,
          messages: res?.data?.data?.messages,
          getSingleLoading: false,
          nombre: res?.data?.data?.messages?.length,
          refresh: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getUserSelected: async (id) => {
    set({
      channels: { ...get().channels, LoadingUserSelected: true },
    });
    try {
      const res = await Axios.get(`/users/${id}`);
      // console.log("res-user-selected-data", res);

      set({
        channels: {
          ...get().channels,
          userSelected: res?.data?.data?.users,
          LoadingUserSelected: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getChannelSelected: async (id) => {
    set({
      channels: { ...get().channels, LoadingChannelSelected: true },
    });
    try {
      const res = await Axios.get(`/channels/${id}`);
      // console.log("res-channels-selected-data", res);

      set({
        channels: {
          ...get().channels,
          ChannelSelected: res?.data?.data?.channel,
          LoadingChannelSelected: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  postMessages: async (channelId, author, body) => {
    try {
      const res = await Axios.post(`/messages`, {
        channelId,
        author,
        body,
      });
      // console.log('data*****',res?.data);
      set({
        channels: {
          ...get().channels,
          messagesSend: res.data.data,
          refresh: true,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default channels;

import { useCallback, useEffect, useState } from "react";
import useStore from "store";
export default function UseGetUsers(id, key) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  // const loading = useStore((state) => state.users.getSingleLoading);
  const getUser = useStore((state) => state.getUser);
  const userIDStore = useStore((state) => state.users.chatUsers);

  const refresh = useStore((state) => state.channels.refresh);
  const getMessages = useStore((state) => state.getMessages);
  const Messages = useStore((state) => state.channels.messages);
  const nombre = useStore((state) => state.channels.nombre);
  const userSelected = useStore((state) => state.channels.userSelected);
  const ChannelSelected = useStore((state) => state.channels.ChannelSelected);
  const LoadingUserSelected = useStore(
    (state) => state.channels.LoadingUserSelected
  );
  const LoadingChannelSelected = useStore(
    (state) => state.channels.LoadingChannelSelected
  );
  const getUserSelected = useStore((state) => state.getUserSelected);
  const getChannelSelected = useStore((state) => state.getChannelSelected);

  const userFetch = useCallback(async () => {
    setLoading(true);
    const res = await getUser(id);
    // console.log(res?.data?.data?.users?.userId);
    setUser(res?.data?.data?.users);
    setLoading(false);
    return res?.data?.data?.users;
  }, [getUser, id]);

  useEffect(() => {
    userFetch();
    return () => {
      setUser({}); // This worked for me
    };
  }, [userFetch]);

  return {
    loading,
    user,
    getMessages,
    Messages,
    nombre,
    getUserSelected,
    userSelected,
    LoadingUserSelected,
    ChannelSelected,
    LoadingChannelSelected,
    getChannelSelected,
    refresh,
    userIDStore
  };
}

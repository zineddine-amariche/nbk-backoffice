import { useState } from "react";
import useStore from "store";
export default function useSendMessages() {
  const [loading, setLoading] = useState(false);
  const postMessages = useStore((state) => state.postMessages);

  const onSubmit = async (channelId, author, body) => {
    const res = await postMessages(channelId, author, body);
    return res;
  };
  return {
    loading,
    onSubmit,
  };
}

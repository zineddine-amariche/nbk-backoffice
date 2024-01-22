import { useEffect } from "react";
import useStore from "store";

export default function useGetChannels() {
  const loading = useStore((state) => state.channels.getLoading);
  const channels = useStore((state) => state.channels.channels);
  const getAllChannels = useStore((state) => state.getAllChannels);

  useEffect(() => {
    getAllChannels();
  }, [getAllChannels]);
  return { loading, channels };
}

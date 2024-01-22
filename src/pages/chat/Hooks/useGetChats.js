
import { useEffect, useState } from "react";
import useStore from "store";

export default function useGetChats() {
  const [Id, setId] = useState([]);
  const getLoading = useStore((state) => state.chats.getLoading);
  const chats = useStore((state) => state.chats.chats);
  const getAllChats = useStore((state) => state.getAllChats);
  const getUser = useStore((state) => state.getUser);
  const user = useStore((state) => state.users.user);


  useEffect(() => {
    getAllChats();
    if (chats) {
      setId(
        chats.map((i) => {
          return i.userId;
        })
      );
    }
  }, [getAllChats]);

  // function uniq(a) {
  //   const namesArr = Id?.filter(function (elem, pos) {
  //     return Id?.indexOf(elem) == pos;
  //   });
  //   console.log("namesArr", namesArr);
  // }
  useEffect(() => {
    let tab = [];
    // console.log("user", user);
    if (Id) {
      const namesArr = Id.filter(function (elem, pos) {
        return Id.indexOf(elem) == pos;
      });
      // console.log("namesArr", namesArr);

      namesArr.forEach((element) => {
        getUser(element);
        // setValue((value) => [...value, user]);
        tab.push(user);
        // console.log("element", element);
      });

      // console.log("tab", tab);
    }

    // uniq();
  }, [Id]);

  // console.log('chats --------------------------', chats)
  // console.log("chatUsers", chatUsers);
  // console.log("channels", chats);
  // console.log('value', value)
  // console.log("value", value);

  return { ChatsLoading: getLoading, chats };
}

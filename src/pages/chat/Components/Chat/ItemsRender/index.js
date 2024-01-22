import { Loading } from "../Loader";
import Receiver from "../receiver";
import React from "react";

export const ItemsRender = ({ item, nombre, userSelected,first }) => {
    if (item?.author === first) {
      return (
        <React.Suspense fallback={<Loading />}>
          <Receiver item={item} nbr={nombre} userSelected={userSelected} first={first} />
        </React.Suspense>
      );
    } else {
      return (
        <React.Suspense fallback={<Loading />}>
          <Receiver item={item} nbr={nombre} userSelected={userSelected} first={first} />
        </React.Suspense>
      );
    }
  };
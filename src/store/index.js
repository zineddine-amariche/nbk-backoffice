import create from "zustand";
import { persist, devtools } from "zustand/middleware";

import auth from "./auth";
import wallet from "./wallet";
import cards from "./cards";
import payins from "./payins";
import users from "./users";
import transfers from "./transfers";
import benefit from "./benefit";
import documents from "./documents";
import transactions from "./transactions";
import channels from "./channels";
import restrictions from "./restrictions";

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...auth(set, get),
        ...wallet(set, get),
        ...cards(set, get),
        ...payins(set, get),
        ...users(set, get),
        ...transfers(set, get),
        ...benefit(set, get),
        ...documents(set, get),
        ...transactions(set, get),
        ...channels(set, get),
        ...restrictions(set, get),
      }),
      {
        name: "nbk",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useStore;

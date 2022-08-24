import { React } from "react";
import { StoreContextProvider } from "./contexts/StoreContext/StoreContext";

const Store = (props) => {
  return <StoreContextProvider>{props.children}</StoreContextProvider>;
};

export default Store;

import { React, useState, useEffect, useContext } from "react";
import { StoreContextProvider } from "./contexts/StoreContext/StoreContext";

const Store = (props) => {
  return <StoreContextProvider>{props.children}</StoreContextProvider>;
};

export default Store;

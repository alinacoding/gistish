import { React, useState, useEffect, useContext } from "react";
import SearchWrapper from "./components/SearchWrapper/SearchWrapper";
import {
  StoreContext,
  StoreContextProvider,
} from "./contexts/StoreContext/StoreContext";
// import  from "./contexts/StoreContext/StoreContext";
const Store = (props) => {
  console.log(StoreContext);
  const {
    submittedButtonVS,
    queryUserVS,
    queryUserChangedVS,
    paginateVS,
    errorVS,
    gistsVS,
  } = useContext(StoreContext);
  console.log(submittedButtonVS);
  //const [submittedButtonValue, setSubmittedButtonValue] = submittedButtonVS;
  //   const [queryUserValue, setQueryUserValue] = queryUserVS;
  //   const [queryUserChangedValue, setQueryUserChangedValue] = queryUserChangedVS;
  //   const [paginateValue, setPaginateValue] = paginateVS;
  //   const [errorValue, setErrorValue] = errorVS;
  //   const [gistsValue, setGistsValue] = gistsVS;

  return <StoreContextProvider>{props.children}</StoreContextProvider>;
};

export default Store;

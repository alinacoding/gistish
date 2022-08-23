import React, { useState, createContext } from "react";

const StoreContext = createContext({
  errorVS: [null, null],
  gistsVS: [[], null],
  queryUserVS: ["", null],
  submittedButtonVS: [false, null],
  paginateVS: [4, null],
  queryUserChangedVS: [false, null],
});

const StoreContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [gists, setGists] = useState([]);

  const [queryUser, setQueryUser] = useState(() => {
    if (localStorage.getItem("queryUser")) {
      return JSON.parse(localStorage.getItem("queryUser"));
    }
    return "";
  });
  const [submittedButton, setSubmittedButton] = useState(() => {
    if (localStorage.getItem("submittedButton")) {
      return JSON.parse(localStorage.getItem("submittedButton"));
    }
    return false;
  });
  const [queryUserChanged, setQueryUserChanged] = useState(() => {
    if (localStorage.getItem("queryUserChanged")) {
      return JSON.parse(localStorage.getItem("queryUserChanged"));
    }
    return false;
  });
  const [paginate, setPaginate] = useState(4);

  return (
    <StoreContext.Provider
      value={{
        submittedButtonVS: [submittedButton, setSubmittedButton],
        queryUserVS: [queryUser, setQueryUser],
        queryUserChangedVS: [queryUserChanged, setQueryUserChanged],
        paginateVS: [paginate, setPaginate],
        gistsVS: [gists, setGists],
        errorVS: [error, setError],
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };

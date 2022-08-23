import React, { useState, useContext } from "react";
import {
  StoreContext,
  StoreContextProvider,
} from "../../contexts/StoreContext/StoreContext";

const SearchWrapper = () => {
  const {
    submittedButtonVS,
    queryUserVS,
    queryUserChangedVS,
    paginateVS,
    errorVS,
    gistsVS,
  } = useContext(StoreContext);
  const [submittedButtonValue, setSubmittedButtonValue] = submittedButtonVS;
  const [queryUserValue, setQueryUserValue] = queryUserVS;
  const [queryUserChangedValue, setQueryUserChangedValue] = queryUserChangedVS;
  const [paginateValue, setPaginateValue] = paginateVS;
  const [errorValue, setErrorValue] = errorVS;
  const [gistsValue, setGistsValue] = gistsVS;

  return (
    <div className="wrapper">
      <span className="search-username">Search gists for username</span>

      <div className="search-wrapper">
        <form
          htmlFor="search-form"
          onSubmit={(event) => {
            console.log("Submitted");
            event.preventDefault();
            if (!errorValue) {
              setQueryUserChangedValue(true);
              setPaginateValue(4);
              setSubmittedButtonValue(true);
            } else {
              setQueryUserChangedValue(false);
              setErrorValue(errorValue);
              setPaginateValue(4);
              setSubmittedButtonValue(false);
            }
          }}
        >
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search user"
            onChange={(event) => {
              event.preventDefault();
              console.log("Event target value", event.target.value);
              if (event.target.value === "") {
                localStorage.setItem("queryUser", JSON.stringify(""));
                localStorage.setItem("submittedButton", false);
                localStorage.setItem("queryUserChanged", queryUserChangedValue);
                setGistsValue([]);
              }
              setQueryUserValue(event.target.value);
              setSubmittedButtonValue(false);
              setQueryUserChangedValue(true);
            }}
            onClick={(event) => {
              console.log("clicked");
              localStorage.clear();
              document.getElementById("search-form").value = "";
              setGistsValue([]);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchWrapper;

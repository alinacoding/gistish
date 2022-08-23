import "./App.css";
import GistList from "./components/GistList/GistList";
import "@fontsource/lemon";
import Logo from "./components/Logo/Logo.component";
import ParticlesComponent from "./components/ParticlesComponent/ParticlesComponent";
import {
  StoreContext,
  StoreContextProvider,
} from "./contexts/StoreContext/StoreContext";
import { useContext, useEffect } from "react";
import SearchWrapper from "./components/SearchWrapper/SearchWrapper";

const App = (props) => {
  window.onload = function (event) {
    console.log("called");
    // document.getElementById("search-form").value = JSON.parse(
    //   localStorage.getItem("queryUser")
    // );
  };
  console.log(useContext(StoreContext));

  const {
    submittedButtonVS,
    queryUserVS,
    queryUserChangedVS,
    paginateVS,
    errorVS,
    gistsVS,
  } = useContext(StoreContext);
  console.log("SUB", submittedButtonVS);
  const [submittedButtonValue, setSubmittedButtonValue] = submittedButtonVS;
  const [queryUserValue, setQueryUserValue] = queryUserVS;
  const [queryUserChangedValue, setQueryUserChangedValue] = queryUserChangedVS;
  const [paginateValue, setPaginateValue] = paginateVS;
  const [errorValue, setErrorValue] = errorVS;
  const [gistsValue, setGistsValue] = gistsVS;

  // console.log(submittedButtonValue);

  const loadMore = (event) => {
    //setPaginateValue((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    const onSubmit = async () => {
      const requestOptions = {
        method: "GET",
      };

      if (submittedButtonValue && queryUserChangedValue && queryUserValue) {
        const resp = await fetch(
          "https://api.github.com/users/" + queryUserValue + "/gists",
          requestOptions
        );
        const json = await resp.json();
        setGistsValue(json);
        if (
          !localStorage.getItem("queryUser") ||
          !(localStorage.getItem("queryUser").length === 0)
        ) {
          localStorage.setItem("queryUser", JSON.stringify(queryUserValue));
        }
        localStorage.setItem("submittedButton", JSON.stringify(true));
        localStorage.setItem("queryUserChanged", JSON.stringify(true));
      }
    };
    onSubmit().catch((error) => {
      setErrorValue(error);
    });
  }, [submittedButtonValue, queryUserChangedValue, queryUserValue]);

  if (errorValue) {
    return <div>{errorValue.message}</div>;
  } else {
    return (
      <div className="App">
        <Logo />
        <div className="container">
          <div>
            <ParticlesComponent />
            <SearchWrapper />
            <GistList
              gists={
                gistsValue.length >= paginateValue
                  ? gistsValue.slice(0, paginateValue)
                  : gistsValue
              }
            />
          </div>
        </div>
        <button onClick={loadMore}>Load More</button>
      </div>
    );
  }
};
export default App;

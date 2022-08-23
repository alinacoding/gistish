import "./App.css";
import React, { useState, useEffect } from "react";
import GistList from "./components/GistList/GistList";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { options } from "./constants/tsoptions";
import logo from "./static/Octocat.png";
import "@fontsource/lemon";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const [error, setError] = useState(null);
  const [gists, setGists] = useState([]);

  window.onload = function (event) {
    console.log("called");
    document.getElementById("search-form").value = JSON.parse(
      localStorage.getItem("queryUser")
    );
    setGists([]);
  };

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

  const loadMore = (event) => {
    setPaginate((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    const onSubmit = async () => {
      const requestOptions = {
        method: "GET",
      };

      if (submittedButton && queryUserChanged && queryUser) {
        const resp = await fetch(
          "https://api.github.com/users/" + queryUser + "/gists",
          requestOptions
        );
        const json = await resp.json();
        setGists(json);
        if (
          !localStorage.getItem("queryUser") ||
          !(localStorage.getItem("queryUser").length === 0)
        ) {
          localStorage.setItem("queryUser", JSON.stringify(queryUser));
        }
        localStorage.setItem("submittedButton", JSON.stringify(true));
        localStorage.setItem("queryUserChanged", JSON.stringify(true));
      }
    };
    onSubmit().catch((error) => {
      setError(error);
    });
  }, [submittedButton, queryUserChanged, queryUser]);

  if (error) {
    return <div>{error.message}</div>;
  } else {
    return (
      <div className="App">
        <div className="logo-main">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="container">
          <div>
            <Particles
              id="ts-paricles"
              options={options}
              init={particlesInit}
              loaded={particlesLoaded}
            />
            <div className="wrapper">
              <span className="search-username">Search gists for username</span>

              <div className="search-wrapper">
                <form
                  htmlFor="search-form"
                  onSubmit={(event) => {
                    console.log("Submitted");
                    event.preventDefault();
                    if (!error) {
                      setQueryUserChanged(true);
                      setPaginate(4);
                      setSubmittedButton(true);
                    } else {
                      setQueryUserChanged(false);
                      setError(error);
                      setPaginate(4);
                      setSubmittedButton(false);
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
                        localStorage.setItem(
                          "queryUserChanged",
                          queryUserChanged
                        );
                        setGists([]);
                      }
                      setQueryUser(event.target.value);
                      setSubmittedButton(false);
                      setQueryUserChanged(true);
                    }}
                    onClick={(event) => {
                      console.log("clicked");
                      localStorage.clear();
                      document.getElementById("search-form").value = "";
                      setGists([]);
                    }}
                  />
                </form>
              </div>
              <GistList
                gists={
                  gists.length >= paginate ? gists.slice(0, paginate) : gists
                }
              />
            </div>
          </div>
          <button onClick={loadMore}>Load More</button>
        </div>
      </div>
    );
  }
};
export default App;

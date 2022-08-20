import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import GistList from "./components/GistList/GistList";

const App = () => {
  window.onunload = function () {
    localStorage.removeItem("queryUser");
    localStorage.removeItem("submittedButton");
    localStorage.removeItem("queryUserChanged");
    localStorage.clear();
  };
  const [error, setError] = useState(null);
  const [gists, setGists] = useState([]);

  const [queryUser, setQueryUser] = useState("");
  const [submittedButton, setSubmittedButton] = useState(false);
  const [queryUserChanged, setQueryUserChanged] = useState(false);
  const [paginate, setPaginate] = useState(5);

  const loadMore = (event) => {
    setPaginate((prevValue) => prevValue + 5);
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

  useEffect(() => {
    const checkUserData = () => {
      const qu = localStorage.getItem("queryUser");
      const bs = localStorage.getItem("submittedButton");
      const quc = localStorage.getItem("queryUserChanged");
      if (qu) {
        setQueryUser(JSON.parse(qu));
      }
      if (bs) {
        setSubmittedButton(bs);
      }
      if (quc) {
        setQueryUserChanged(quc);
      }
    };
    checkUserData();
    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  } else {
    return (
      <div>
        <div className="wrapper">
          <div className="search-wrapper">
            <form
              htmlFor="search-form"
              onSubmit={(event) => {
                console.log("Submitted");
                event.preventDefault();
                if (!error) {
                  setQueryUserChanged(true);
                  setPaginate(5);
                  setSubmittedButton(true);
                } else {
                  setQueryUserChanged(false);
                  setError(error);
                  setPaginate(5);
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
                    localStorage.setItem("queryUserChanged", queryUserChanged);
                    setGists([]);
                  }
                  setQueryUser(event.target.value);
                  setSubmittedButton(false);
                  setQueryUserChanged(true);
                }}
              />
              <span className="search-username">Search gists for username</span>
            </form>
          </div>
        </div>
        <GistList
          gists={gists.length >= paginate ? gists.slice(0, paginate) : gists}
        />
        <button onClick={loadMore}>Load More</button>
      </div>
    );
  }
};

export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import GistList from "./components/GistList/GistList";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const App = () => {
  const [error, setError] = useState(null);
  const [gists, setGists] = useState([]);
  const [queryUser, setQueryUser] = useState("");
  const [submittedButton, setSubmittedButton] = useState(false);
  const [queryUserChanged, setQueryUserChanged] = useState("false");

  useEffect(() => {
    console.log(submittedButton);
    const request_options = {
      method: "GET",
    };
    if (queryUser) {
      fetch(
        "https://api.github.com/users/" + queryUser + "/gists",
        request_options
      )
        .then((res) => res.json())
        .then((result) => {
          setGists(result);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [submittedButton, queryUserChanged]);

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
                  console.log("No errors");
                  setSubmittedButton(true);
                  setQueryUser(queryUser);
                  setGists(gists);
                  setQueryUserChanged(!queryUserChanged);
                } else {
                  setGists([]);
                  setQueryUser("");
                  setError(error);
                  setSubmittedButton(false);
                  setQueryUserChanged(!queryUserChanged);
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
                  setQueryUser(event.target.value);
                  console.log(event.target.value);
                }}
              />
              <span className="search-username">Search gists for username</span>
            </form>
          </div>
        </div>
        <GistList gists={gists} />;
      </div>
    );
  }
};

export default App;

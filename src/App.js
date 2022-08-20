import "./App.css";
import React, { useState, useEffect } from "react";
import GistList from "./components/GistList/GistList";

const App = () => {
  const [error, setError] = useState(null);
  const [gists, setGists] = useState([]);
  const [queryUser, setQueryUser] = useState("");
  const [submittedButton, setSubmittedButton] = useState(false);
  const [queryUserChanged, setQueryUserChanged] = useState("false");
  const [paginate, setPaginate] = useState(5);

  const loadMore = (event) => {
    setPaginate((prevValue) => prevValue + 5);
  };

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
  if (gists.length) {
    console.log(gists);
  }
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
                  setPaginate(5);
                } else {
                  setGists([]);
                  setQueryUser("");
                  setError(error);
                  setSubmittedButton(false);
                  setQueryUserChanged(!queryUserChanged);
                  setPaginate(5);
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
        <GistList gists={gists.slice(0, paginate)} />
        <button onClick={loadMore}>Load More</button>
      </div>
    );
  }
};

export default App;

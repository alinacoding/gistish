import "./App.css";
import React, { useState, useEffect } from "react";
import GistList from "./components/GistList/GistList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [error, setError] = useState(null);
  const [gists, setGists] = useState([]);
  const [queryUser, setQueryUser] = useState("");
  const [submittedButton, setSubmittedButton] = useState(false);
  const [queryUserChanged, setQueryUserChanged] = useState("false");
  const [paginate, setPaginate] = useState(5);
  const [prevUser, setPrevUser] = useState("");
  const history = useNavigate();

  const loadMore = (event) => {
    setPaginate((prevValue) => prevValue + 5);
  };

  useEffect(() => {
    const onSubmit = async () => {
      const request_options = {
        method: "GET",
      };
      if (submittedButton && queryUserChanged && queryUser) {
        const resp = await fetch(
          "https://api.github.com/users/" + queryUser + "/gists",
          request_options
        );
        const json = await resp.json();
        setGists(json);
      }
    };
    onSubmit().catch((error) => {
      setError(error);
    });
  }, [submittedButton, queryUserChanged, queryUser]);
  console.log("Submitted button", submittedButton);
  console.log("queryUserChanged", queryUserChanged);
  console.log("gists", gists);

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
                  setSubmittedButton(true);
                  setPrevUser(queryUser);
                  setQueryUserChanged(true);
                  setPaginate(5);
                } else {
                  setQueryUserChanged(true);
                  setError(error);
                  setPaginate(5);
                  setSubmittedButton(true);
                  setQueryUser(prevUser);
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

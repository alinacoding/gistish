import "./App.css";
import React, { useState, useEffect } from "react";
import GistList from "./components/GistList/GistList";

function App() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(() => {
    const request_options = {
      method: "GET",
    };

    fetch("https://api.github.com/users/koraktor/gists", request_options)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setGists(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(gists);

  if (error) {
    return <div>{error.message}</div>;
  } else if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return <GistList gists={gists} />;
  }
}

export default App;

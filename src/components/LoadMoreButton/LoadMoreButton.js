import React, { useState, useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext/StoreContext";
import "./LoadMoreButton.styles.css";

const LoadMoreButton = () => {
  const { paginateVS } = useContext(StoreContext);
  const [paginateValue, setPaginateValue] = paginateVS;

  const loadMore = (event) => {
    setPaginateValue((prevValue) => prevValue + 4);
  };

  return <button onClick={loadMore}>Load More</button>;
};

export default LoadMoreButton;

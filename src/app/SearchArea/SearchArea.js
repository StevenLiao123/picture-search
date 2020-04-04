import React from "react";
import SearchByCoordinate from "./SearhByCoordinate";
import SearchByLocation from "./SearchByLocation";

import "./SearchArea.css";

export default () => {
  return (
    <div className="search-area">
      <h1>Search Area</h1>
      <div className="search-area-forms">
        <SearchByCoordinate />
        <SearchByLocation />
      </div>
    </div>
  );
};

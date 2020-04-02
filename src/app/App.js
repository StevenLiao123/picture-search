import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SearchArea from "./SearchArea";
import Gallery from "./Gallery";
import FavouritesList from "./FavouritesList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <SearchArea />
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/favourites-list" component={FavouritesList} />
        <Redirect to="/gallery" />
      </Switch>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ItemBitcoin from "./component/ItemBitcoin";
import ListDetails from "./component/ListDetails";

import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/items" exact component={ItemBitcoin} />
        <Route path="/items/:id" component={ListDetails} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return <h1>Home</h1>;
};

export default App;

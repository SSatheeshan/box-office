import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>This page is not found invalid link</Route>
      </Switch>
    </div>
  );
}
export default App;

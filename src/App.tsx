import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import GitHubDataProvider from "./hooks/githubData/GithubDataProvider";
import UserActivityView from "./views/UserActivity/UserActivity";
import HomePageView from "./views/HomePage/HomePage";

function App() {
  return (
    <GitHubDataProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageView />
          </Route>
          <Route path="/user-activity/:username">
            <UserActivityView />
          </Route>
        </Switch>
      </Router>
    </GitHubDataProvider>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import { GitHubState } from "./context/gitHub/gitHubState";

function App() {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4 ">
            <Alert alert={{ text: "Test alert" }} />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
              <Route path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;

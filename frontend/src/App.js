import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login/LogIn";
import DashBoard from "./components/DashBoard/DashBoard";
import Register from "./components/Register/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import Page404 from "./components/Page404/Page404";
import ProviderRegister from './components/ProviderRegister/ProviderRegister';
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/register" exact component={Register} />
          <Route path="/provider-register" exact component={ProviderRegister} />
          <ProtectedRoute exact path="/dashboard" component={DashBoard} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

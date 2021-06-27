import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import LoginPage from "./pages/loginPage";
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <HashRouter basename="/">
            <Route exact path="/" component={LoginPage} />
            </HashRouter>
          </div>
      </Provider>
    );
  }
}
export default App;

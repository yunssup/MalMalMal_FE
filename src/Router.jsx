import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstPage from "./component/FirstPage";
import Hello from "./component/Hello";
import Choice from "./component/Choice";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { FadeContainer } from "./component/Styled"; // styles.js에서 export한 FadeContainer를 import합니다.

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <FadeContainer>
            <FirstPage />
          </FadeContainer>
        </Route>
        <Route path="/hello">
          <FadeContainer>
            <Hello />
          </FadeContainer>
        </Route>
        <Route path="/choice">
          <Choice />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstPage from "./component/FirstPage";
import Hello from "./component/Hello";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FirstPage} /> {/* exact 추가 */}
        <Route path="/hello" component={Hello} />
      </Switch>
    </Router>
  );
}

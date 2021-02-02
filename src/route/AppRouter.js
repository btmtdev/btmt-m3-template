import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import PageBlank from "../pages/page/PageBlank";
function AppRouter() {
  return (
    <Switch>
      {<Redirect exact from="/" to="/dashboard" />}
      <Route
        path="/dashboard"
        render={() => <Layout content={<PageBlank />} />}
      />
      <Redirect to="/error/error-404" />
    </Switch>
  );
}

export default AppRouter;

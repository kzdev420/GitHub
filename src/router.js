import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./layouts";

import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Home, CreatePoint, Success } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Success} path="/success" />
    </BrowserRouter>
  );
};

export default Routes;

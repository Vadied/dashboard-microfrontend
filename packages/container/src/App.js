import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) history.push("/dashboard");
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<Progress />}>
          <Routes>
            <Route path="/" element={<MarketingLazy />}>
              <Route
                path="auth"
                element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
              />
              <Route path="dashboard">
                {!isSignedIn && <Navigate to="/"/>}
                {isSignedIn && <DashboardLazy />}
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};

export default App;

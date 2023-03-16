import React, { lazy, Suspense } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const history = useHistory();
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Suspense fallback={<Progress />}>
          <Router history={history}>
            <Routes>
              <Route path="/" element={<MarketingLazy />}>
                <Route path="/auth" element={<AuthLazy />} />
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;

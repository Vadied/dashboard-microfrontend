import React from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const history = useHistory();
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Router history={history}>
          <Routes>
            <Route path="/" element={<MarketingApp />}>
              <Route path="/auth" element={<AuthApp />} />
            </Route>
          </Routes>
        </Router>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;

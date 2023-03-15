import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});
const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/landing" element={<Landing />} />
            </Route>
          </Routes>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;

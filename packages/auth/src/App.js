import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});
const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Routes>
            <Route path="/auth" element={<Signin onSignIn={onSignIn} />}>
              <Route path="/signin" element={<Signin onSignIn={onSignIn} />} />
              <Route path="/signup" element={<Signup onSignIn={onSignIn} />} />
            </Route>
          </Routes>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;

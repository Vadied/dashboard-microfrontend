import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  console.log("test marketing");
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/landing" element={<Landing />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;

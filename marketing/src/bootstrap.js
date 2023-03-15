import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const mount = (el, { defaultHistory, onNavigate = null } = {}) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (history.location.pathname === nextPathname) return;

      history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("_marketing-dev-root");
  if (root) mount(root, { defaultHistory: createBrowserHistory() });
}

export { mount };

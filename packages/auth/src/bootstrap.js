import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const mount = (
  el,
  { defaultHistory, onSignIn, onNavigate = null, initialPath } = {}
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (history.location.pathname === nextPathname) return;

      history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("_auth-dev-root");
  if (root) mount(root, { defaultHistory: createBrowserHistory() });
}

export { mount };

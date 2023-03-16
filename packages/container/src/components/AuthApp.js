import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";
export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname === nextPathname) return;

        history.push(nextPathname);
      },
      onSignIn: () => {

      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
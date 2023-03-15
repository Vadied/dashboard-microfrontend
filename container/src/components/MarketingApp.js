import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";
export default function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname === nextPathname) return;

        history.push(nextPathname);
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
}

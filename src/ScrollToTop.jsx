import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // no delay, no animation
  }, [pathname]);

  return null;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Fades in every `.reveal` element once it scrolls into view.
export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}

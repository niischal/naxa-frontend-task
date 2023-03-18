import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollPosition > 800 ? (
        <Link smooth spy to="top">
          <BsArrowUpCircleFill className="scroll-icon" size="50px" />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default ScrollToTop;

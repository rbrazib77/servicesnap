import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      // Adjust the threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <MdKeyboardArrowUp onClick={scrollToTop} className="back-to-top-button"/>
      )}
    </div>
  );
};

export default BackToTopButton;

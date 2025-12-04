"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center justify-center rounded-full bg-blue-600 p-4 text-white shadow-lg hover:scale-110 transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS);
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickBtn = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button className={btnCls} onClick={onClickBtn} aria-label="Scroll to top">
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;

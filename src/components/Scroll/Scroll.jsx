import React, { useEffect, useContext, useState } from "react";

import { Icon } from "./ScrollStyles";
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { ContextState } from "../../../context/ContextState";

import { darkTheme, lightTheme } from "../../themes/default";

const Scroll = () => {
  const [darkMode, setDarkMode] = useContext(ContextState);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const color = darkMode
    ? darkTheme.colorTheme.primary1
    : lightTheme.colorTheme.primary1;

  const iconSize = "4rem";
  const iconScrollAmount = 70;
  const scrollThreshold = 700;

  const scrollAmount = 1;

  const scroll = (amount) => {
    setTimeout(() => {
      window.scrollBy(0, amount);
    }, 400);
  };
  const scrollNoWait = (amount) => {
    window.scrollBy(0, amount);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    //console.log(scrollTop);
    if (scrollTop >= iconScrollAmount) {
      setScrolledPast(true);
    } else {
      setScrolledPast(false);
    }

    //console.log(scrolledPast);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    /**
     * Returnerer icon hvis scrollTop > 70, ellers return span
     */
    <>
      {scrolledPast ? (
        <Icon>
          {darkMode ? (
            <IoMdSunny
              size={iconSize}
              onClick={() => {
                setDarkMode(!darkMode);
                if (scrollTop < scrollThreshold) {
                  scroll(scrollAmount);
                } else {
                  scrollNoWait(scrollAmount);
                }
              }}
              color={color}
            />
          ) : (
            <IoMdMoon
              size={iconSize}
              onClick={() => {
                setDarkMode(!darkMode);
                if (scrollTop < scrollThreshold) {
                  scroll(scrollAmount);
                } else {
                  scrollNoWait(scrollAmount);
                }
              }}
              color={color}
            />
          )}
        </Icon>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default Scroll;

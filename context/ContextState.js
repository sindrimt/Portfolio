import React, { useState, createContext } from "react";

export const ContextState = createContext();

export const StateProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false); // Default som light mode
  const [language, setLanguage] = useState(true); // false standard for norsk
  return (
    <ContextState.Provider
      value={[darkMode, setDarkMode, language, setLanguage]}
    >
      {props.children} {/* Rendrer alle components inni ContextState */}
    </ContextState.Provider>
  );
};

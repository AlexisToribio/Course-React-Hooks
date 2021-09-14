import React, { useContext } from "react";
import { HeaderContainer } from "./styles/Header";
import { LightBulbIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HeaderContainer darkMode={darkMode}>
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        <LightBulbIcon />
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
      {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark Mode 2" : "Light Mode 2"}
      </button> */}
    </HeaderContainer>
  );
}

import { createContext, useState } from "react";
import { ReactPropTypes } from "react";
import PropTypes from "prop-types";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { isMobile } from "react-device-detect";

import Content from "./modules/Content";
import MobileBottomNav from "./modules/MobileBottomNav";

import logo from "./logo.svg";
import "./App.css";
import "./modules/MobileBottomNav.css";
import NonMobile from "./modules/NonMobile";
import DesktopSideNav from "./modules/DesktopSideNav";
import { Link } from "react-router-dom";
import AppQRcode from "./modules/AppQRcode";

export const ThemeContext = createContext(null);

function App() {
  // Light/dark mode state
  const [isDarkMode, setDarkMode] = useState(false);
  // Toggle to switch between light and dark
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // Device check
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="App" id={isDarkMode ? "dark" : "light"}>
      {/* Logo header */}
      {isMobile ? (
        <div className="header">
          <p className="logo">EMRA RA</p>
        </div>
      ) : null}

      {/* Dark mode toggle */}
      {isMobile ? (
        <div id="darkModeToggle">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={20}
          />
        </div>
      ) : null}

      {isMobile ? <Content /> : null}
      {isMobile ? <MobileBottomNav /> : null}

      {isMobile ? null : (
        <div className="desktopStyleOnly">
          {/* Content */}
          <Content />

          {/* Bottom navigation */}
          {isMobile ? (
            <MobileBottomNav />
          ) : (
            <div className="sideNavWrapper">
              <div className="header">
                <p className="logo">Advanced Analgesia</p>
              </div>
              <DesktopSideNav />
              <div id="darkModeToggle" onClick={() => toggleDarkMode()}>
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={20}
                />
              </div>

              <AppQRcode />
            </div>
          )}
          {/* <MobileBottomNav /> */}
        </div>
      )}
    </div>
  );
}

export default App;

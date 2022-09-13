import { createContext, useState } from 'react';
import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import Content from './modules/Content';
import MobileBottomNav from './modules/MobileBottomNav';

import logo from './logo.svg';
import './App.css';
import './modules/MobileBottomNav.css'





export const ThemeContext = createContext(null);

function App() {

  // Light/dark mode state
  const [isDarkMode, setDarkMode] = useState(false);
  // Toggle to switch between light and dark
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };



  return (
    <div className="App" id={isDarkMode ? "dark" : "light"}>
      {/* Logo header */}
      <div className="header">
        <p className="logo">Advanced Analgesia</p>
      </div>


      {/* Content */}
      <Content />


      {/* Dark mode toggle */}
      <div id="darkModeToggle">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />
      </div>
      
      
      {/* Bottom navigation */}
      <MobileBottomNav />
      
    </div>
    
  );
}

export default App;

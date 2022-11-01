import { createContext, useState } from 'react';
import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import {isMobile} from 'react-device-detect';

import Content from './modules/Content';
import MobileBottomNav from './modules/MobileBottomNav';

import logo from './logo.svg';
import './App.css';
import './modules/MobileBottomNav.css'
import NonMobile from './modules/NonMobile';






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
  
  console.log('isMobile', isMobile)



  return (
    
    <div className="App" id={isDarkMode ? "dark" : "light"}>
      {/* Logo header */}
      {/* { isMobile ? 
      <div className="header">
        <p className="logo">Advanced Analgesia</p>
      </div>
      : null } */}
      <div className="header">
        <p className="logo">Advanced Analgesia</p>
      </div>
      


      {/* Content */}
      {/* { isMobile ? 
      <Content />
      :
      <NonMobile /> 
      } */}
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
      {/* {isMobile ? 
      <MobileBottomNav />
      : null} */}
      <MobileBottomNav />
      
      
    </div>
    
  );
}

export default App;

import { createContext, useState } from 'react';
import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import Content from './modules/Content';

import logo from './logo.svg';
import './App.css';
import './modules/MobileBottomNav.css'


// icons
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



export const ThemeContext = createContext(null);

function Main() {
  // Light/dark mode state
  const [isDarkMode, setDarkMode] = useState(false);
  // Toggle to switch between light and dark
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };


  // Bottom Nav selection Toggle States & function
  const [ selectedNav, setSelectedNav ] = useState([
    { label:"one", value: true},
    { label:"two", value: false},
    { label: "three", value: false},
    { label: "four", value: false}
  ])
  const bottomNavSelectToggle = ({
    selectedNav, setSelectedNav, bottomNavSelectToggle
  }) => label => {
    const newBottomNavSelected = selectedNav.map(nav => {
      if(nav.label === label) {
        return( nav = { label: nav.label, value: true})
      } else {
        return ( nav = { label: nav.label, value: false})
      }
    })
    setSelectedNav(newBottomNavSelected)
  }


  return (
    <div className="App" id={isDarkMode ? "dark" : "light"}>
      {/* Logo header */}
      <div className="header">
        <p className="logo">Advanced Analgesia</p>
      </div>


      {/* Content */}
      <Content bottomNavState={selectedNav} />

      {/* Dark mode toggle */}
      <div id="darkModeToggle">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />
      </div>
      
      
      <div id="mobileBottomNav"> {/* Seperate CSS file MobileBottomNav.css */}
        <div className="mobileBottomNav--wrapper smallText">
          <div onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('one')} className={`mobileBottomNav--item mobileBottomNav--itemOne ${selectedNav[0].value === true ? 'bottomNavActive' : ''}`}>
            <AccessibilityNewRoundedIcon />
            <p>Body</p>
          </div>
          <div onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('two')} className={`mobileBottomNav--item mobileBottomNav--itemTwo ${selectedNav[1].value === true ? 'bottomNavActive' : ''}`}>
            <StickyNote2OutlinedIcon />
            <p>Basics</p>
          </div>
          <div onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('three')} className={`mobileBottomNav--item mobileBottomNav--itemThree ${selectedNav[2].value === true ? 'bottomNavActive' : ''}`}>
            <SortByAlphaOutlinedIcon />
            <p>List</p>
          </div>
          <div onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('four')} className={`mobileBottomNav--item mobileBottomNav--itemFour ${selectedNav[3].value === true ? 'bottomNavActive' : ''}`}>
            <HelpOutlineIcon />
            <p>Info</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Main
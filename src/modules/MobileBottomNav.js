import React, { useState } from 'react'
import './MobileBottomNav.css'

// icons
// import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link, useParams } from 'react-router-dom';



function MobileBottomNav() {

  const params = useParams()

  console.log('Object.values(params)[0]', Object.values(params)[0])
  
  // Bottom Nav selection Toggle States & function
  const [ selectedNav, setSelectedNav ] = useState([
    // { label:"one", value: Object.values(params)[0] !== 'basics' && Object.values(params)[0] !== 'list' && Object.values(params)[0] !== 'info' ? true : false},
    { label:"one", value: Object.values(params)[0] === undefined ? true : false},
    { label:"two", value: Object.values(params)[0] === 'basics' ? true : false},
    { label: "three", value: Object.values(params)[0] === 'list' ? true : false},
    { label: "four", value: Object.values(params)[0] === 'info' ? true : false}
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
    <div id="mobileBottomNav">
      <div className="mobileBottomNav--wrapper smallText">

        <Link to='/' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('one')} className={`mobileBottomNav--item mobileBottomNav--itemOne ${selectedNav[0].value === true ? 'bottomNavActive' : 'bottomNavInactive'}`}>
          <CabinRoundedIcon />
          <p>Home</p>
        </Link>
        
        {/* <Link to='/basics' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('two')} className={`mobileBottomNav--item mobileBottomNav--itemTwo ${selectedNav[1].value === true ? 'bottomNavActive' : 'bottomNavInactive'}`}>
          <StickyNote2OutlinedIcon />
          <p>Basics</p>
        </Link> */}

        <Link to='/list' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('three')} className={`mobileBottomNav--item mobileBottomNav--itemThree ${selectedNav[2].value === true ? 'bottomNavActive' : 'bottomNavInactive'}`}>
          <SearchRoundedIcon />
          <p>Search</p>
        </Link>

        <Link to='/info' onClick={() => bottomNavSelectToggle({selectedNav, setSelectedNav})('four')}  className={`mobileBottomNav--item mobileBottomNav--itemFour ${selectedNav[3].value === true ? 'bottomNavActive' : 'bottomNavInactive'}`}>
          <HelpOutlineIcon />
          <p>Info</p>
        </Link>
      </div>
    </div>
  )
}

export default MobileBottomNav
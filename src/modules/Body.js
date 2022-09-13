import React, { useState } from 'react'
import './Body.css'

// import {ReactComponent as BoldBodyOutline} from '../illustrations/body-bold.svg'
// import {ReactComponent as BodyOutline} from '../illustrations/body-outline.svg'
import {ReactComponent as BodyOutline} from '../illustrations/outlined-bodyoutline.svg'
import {ReactComponent as SelectedHead} from '../illustrations/head.svg'
import {ReactComponent as SelectedTorso} from '../illustrations/torso.svg'
import {ReactComponent as SelectedArms} from '../illustrations/arms.svg'
import {ReactComponent as SelectedLegs} from '../illustrations/legs.svg'

import {ReactComponent as SelectedArmLeft} from '../illustrations/armL.svg'
import {ReactComponent as SelectedArmRight} from '../illustrations/armR.svg'
import {ReactComponent as SelectedLegLeft} from '../illustrations/legL.svg'
import {ReactComponent as SelectedLegRight} from '../illustrations/legR.svg'
import BodyContentList from './BodyContentList'
// import BodyOutline from '../illustrations/body-outline.svg'


import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { Link } from 'react-router-dom'


function Body() {

  // Check selection
  const [ selectedSection, setSeletedSection ] = useState([
    { label: "head", value: false },
    { label: "torso", value: false },
    { label: "arms", value: false },
    { label: "legs", value: false },
  ])
  const [ nothingSelected, setNothingSelected ] = useState(true)


  // Body section selected toggle function
  const handleSelectionToggle = ({
    selectedSection, setSeletedSection, handleSelectionToggle
  }) => label => {
    const newSelectedSectionState = selectedSection.map(selected => {
      if(selected.label === label && selected.value === false){
        return (selected = { label: selected.label, value: true });
      } else if(selected.label === label && selected.value === true) {
        return (selected = { label: selected.label, value: false });
      }
      return {
        label: selected.label,
        value: false
      }
    })
    setSeletedSection(newSelectedSectionState)

    // Check if nothing is selected
    for(let i = 0; i < newSelectedSectionState.length; i++){
      if( newSelectedSectionState[i].value === true){
        return ( setNothingSelected(false))
      }
    }
    return (setNothingSelected(true))
  }



  // Button click handle
  const [ contentDisplay, setContentDisplay ] = useState([
    { selected: "body", value: true },
    { selected: "headneck", value: false },
    { selected: "torso", value: false },
    { selected: "upperextremities", value: false },
    { selected: "lowerextremities", value: false },
  ])
  const handleContentDisplay = ({
    contentDisplay, setContentDisplay, handleContentDisplay
  }) => selectedPart => {
    const newContentDisplayState = contentDisplay.map(part => {
      if(part.selected === selectedPart && part.value === false){
        return (part = { selected: part.selected, value: true });
      } else if(part.selected === selectedPart && part.value === true) {
        return (part = { selected: part.label, value: false });
      }
      return {
        selected: part.selected,
        value: false
      }
    })
    setContentDisplay(newContentDisplayState)
  }


  return (
    <div className="body">

      {/* Show Body */}
      {contentDisplay[0].value ? 
      <div className="illustrationWrapper bodyOutlineSvg">
        {/* <BoldBodyOutline className="body--outline-bold" /> */}
        <BodyOutline className="body--outline" />
        {/* <img src={BodyOutline} alt="" /> */}
        <div className="selectionWrapper">

           <SelectedArms className="body--arms" fill={selectedSection[2].value ? "#05e6e1" : "none"} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("arms")} />

          <SelectedHead className="body--head" fill={selectedSection[0].value ? "#05e6e1" : "none"} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("head")} />

          <SelectedTorso className="body--torso" fill={selectedSection[1].value ? "#05e6e1" : "none"} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("torso")} />

          <SelectedLegs className="body--legs" fill={selectedSection[3].value ? "#05e6e1" : "none"} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("legs")} />
        </div>
      </div>
      : null}

      {/* Button when no part is selected */}
      {contentDisplay[0].value && nothingSelected ?
        <div className="button-full button-disabled">Select from the body</div>
      :null}
      {/* Button depends on the selected part */}
      {contentDisplay[0].value && !nothingSelected ? 
      selectedSection.map(selected => {
        if( selected.value === true && selected.label === 'head' ){
          return (
            // <div onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("headneck")} className="button-full" key="btn-head">Head & neck</div>
            <Link to={`/headneck`} key={selected.label} className="button-full">Head & Neck</Link>
          )
        } else if( selected.value === true && selected.label === 'torso' ){
          return (
            <Link to={`/${selected.label}`} key={selected.label} className="button-full">Torso</Link>
            // <div onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("torso")} className="button-full" key="btn-torso">Torso</div>
          )
        } else if( selected.value === true && selected.label === 'arms' ){
          return (
            <Link to={`/upperextremities`} key={selected.label} className="button-full">Upper Extremities</Link>
            // <div onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("upperextremities")} className="button-full" key="btn-arms">Upper extremities</div>
          )
        } else if( selected.value === true && selected.label === 'legs' ){
          return (
            <Link to={`/lowerextremities`} key={selected.label} className="button-full">Lower Extremities</Link>
            // <div onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("lowerextremities")} className="button-full" key="btn-legs">Lower extremities</div>
          )
        }
      })
      :null}


      

      {/* Show head content */}
      {/* {contentDisplay[1].value ? 
        <div className="bodyContentList--container">
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="bodyContentList--breadcrumb"><KeyboardArrowLeftRoundedIcon /> Body</p>
          <BodyContentList category="head" />
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="button-full-secondary float-bottom">Back</p>
        </div>
      : null}
      {contentDisplay[2].value ? 
        <div className="bodyContentList--container">
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="bodyContentList--breadcrumb"><KeyboardArrowLeftRoundedIcon /> Body</p>
          <BodyContentList category="torso" />
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="button-full-secondary float-bottom">Back</p>
        </div>
      : null}
      {contentDisplay[3].value ? 
        <div className="bodyContentList--container">
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="bodyContentList--breadcrumb"><KeyboardArrowLeftRoundedIcon /> Body</p>
          <BodyContentList category="arms" />
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="button-full-secondary float-bottom">Back</p>
        </div>
      : null}
      {contentDisplay[4].value ? 
        <div className="bodyContentList--container">
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="bodyContentList--breadcrumb"><KeyboardArrowLeftRoundedIcon /> Body</p>
          <BodyContentList category="legs" />
          <p onClick={() => handleContentDisplay({ contentDisplay, setContentDisplay})("body")} className="button-full-secondary float-bottom">Back</p>
        </div>
      : null} */}
      

    </div>
  )
}

export default Body
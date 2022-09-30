import React, { useState } from 'react'
import './Body.css'



import bodyOutline from '../illustrations/bodyOutline.png'
import armsImg from '../illustrations/arms.png';
import torsoImg from '../illustrations/torso.png';
import headImg from '../illustrations/headandneck.png';
import legsImg from '../illustrations/legs.png'


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


  // Resize svg viewbox
  // function resizeSVG() {
  //   var  svg = document.querySelectorAll('.svgImg')
  //   // Get the bounds of the SVG content
  //   var  bbox = svg.getBBox();
  //   // Update the width and height using the size of the contents
  //   svg.setAttribute("width", bbox.x + bbox.width + bbox.x);
  //   svg.setAttribute("height", bbox.y + bbox.height + bbox.y);
  // }
  // resizeSVG()


  return (
    <div className="body">

      {/* Show Body */}
      {contentDisplay[0].value ? 
      <div className="illustrationWrapper bodyOutlineSvg">
        {/* <img src={bodyOutline} className="body--outline" alt="" /> */}
        <div className="body--frame"></div>
        
        <div className="selectionWrapper">

          <img src={armsImg} className={`body--arms svgImg ${selectedSection[2].value ? 'selectedPart' : 'nonSelectedPart'}`} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("arms")} />

          
          <img src={headImg} className={`body--head svgImg ${selectedSection[0].value ? "selectedPart" : "nonSelectedPart"}`} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("head")} preserveAspectRatio="xMidYMid meet" />

          <img src={torsoImg} className={`body--torso svgImg ${selectedSection[1].value ? "selectedPart" : "nonSelectedPart"}`} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("torso")} />

          
          <img src={legsImg} className={`body--legs svgImg ${selectedSection[3].value ? "selectedPart" : "nonSelectedPart"}`} onClick={() => handleSelectionToggle({ selectedSection, setSeletedSection})("legs")} />
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
            <Link to={`/headneck`} key={selected.label} className="button-full">Head & Neck</Link>
          )
        } else if( selected.value === true && selected.label === 'torso' ){
          return (
            <Link to={`/${selected.label}`} key={selected.label} className="button-full">Torso</Link>
          )
        } else if( selected.value === true && selected.label === 'arms' ){
          return (
            <Link to={`/upperextremities`} key={selected.label} className="button-full">Upper Extremities</Link>
          )
        } else if( selected.value === true && selected.label === 'legs' ){
          return (
            <Link to={`/lowerextremities`} key={selected.label} className="button-full">Lower Extremities</Link>
          )
        }
      })
      :null}


      

      
      

    </div>
  )
}

export default Body
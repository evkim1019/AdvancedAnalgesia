import React from 'react'
import { Link } from 'react-router-dom';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

// import armsImg from '../illustrations/thumbUpper.png';
// import torsoImg from '../illustrations/thumbTorso.png';
// import headImg from '../illustrations/thumbHeadNeck.png';
// import legsImg from '../illustrations/thumbLower.png'
import './ButtonView.css'


function ButtonView() {
  return (
    <div className="buttonView">
      <div className="buttonWrapper">

        <div className="landingGuide">
          <p>Select a button</p>
        </div>
        

        <Link to={`/headneck`} className="button">
          <>
          <div className="buttonView_thumbWrapper">
            <div className="buttonView_thumb buttonView_thumb--headneck"></div>
          </div>
          
          <div>
            <h2>Head and Neck</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </Link>

        <Link to={`/torso`} className="button">
          <>
          <div className="buttonView_thumbWrapper">
            <div className="buttonView_thumb buttonView_thumb--torso"></div>
          </div>
          
          <div>
            <h2>Torso</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </Link>

        <Link to={`/upperextremities`} className="button">
          <>
          <div className="buttonView_thumbWrapper">
            <div className="buttonView_thumb buttonView_thumb--upper"></div>
          </div>
          
          <div>
            <h2>Upper Extermities</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </Link>

        <Link to={`/lowerextremities`} className="button">
          <>
          <div className="buttonView_thumbWrapper">
            <div className="buttonView_thumb buttonView_thumb--lower"></div>
          </div>
          <div>
            <h2>Lower Extermities</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </Link>

        {/* <a className="button">
          <>
          <div><img src={legsImg} /></div>
          <div>
            <h2>Basics</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </a> */}

      </div>
    </div>
  )
}

export default ButtonView
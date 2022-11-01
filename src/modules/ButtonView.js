import React from 'react'
import { Link } from 'react-router-dom';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import armsImg from '../illustrations/arms.png';
import torsoImg from '../illustrations/torso.png';
import headImg from '../illustrations/headandneck.png';
import legsImg from '../illustrations/legs.png'
import './ButtonView.css'

import thumbHeadNeck from '../illustrations/headneck-thumb.svg'


function ButtonView() {
  return (
    <div className="buttonView">
      <div className="buttonWrapper">

        <div className="landingGuide">
          <p>Select a button</p>
        </div>
        

        <a href={`/headneck`} className="button">
          <>
          <div><img src={headImg} /></div>
          <div>
            <h2>Head</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </a>

        <a href={`/torso`} className="button">
          <>
          <div><img src={torsoImg} /></div>
          <div>
            <h2>Torso</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </a>

        <a href={`/upperextremities`} className="button">
          <>
          <div><img src={armsImg} /></div>
          <div>
            <h2>Upper Extermities</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </a>

        <a href={`/lowerextremities`} className="button">
          <>
          <div><img src={legsImg} /></div>
          <div>
            <h2>Lower Extermities</h2>
            <KeyboardArrowRightRoundedIcon />
          </div>
          </>
        </a>

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
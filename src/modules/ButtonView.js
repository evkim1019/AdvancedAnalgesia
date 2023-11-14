import React from "react";
import { Link } from "react-router-dom";

import { isMobile } from "react-device-detect";

import appStoreBanner from "../contents/contentImg/emra_ra-1200x628.png";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

// import armsImg from '../illustrations/thumbUpper.png';
// import torsoImg from '../illustrations/thumbTorso.png';
// import headImg from '../illustrations/thumbHeadNeck.png';
// import legsImg from '../illustrations/thumbLower.png'
import "./ButtonView.css";
import AppQRcode from "./AppQRcode";

function ButtonView() {
  return (
    <div className="buttonView">
      <div className="buttonWrapper">
        <div className="landingGuide">
          <p>Select a button</p>
        </div>

        {/* <Link to={`/basics`} className="button color-intro">
          <>
          <div className="buttonView_text">
            <h2>Introduction</h2>
          </div>
          <div className="buttonView_thumbWrapper">
            <div className="buttonView_thumb"></div>
          </div>
          </>
        </Link> */}

        <Link to={`/headneck`} className="button color-headneck">
          <>
            <div className="buttonView_text">
              <h2>Head and Neck</h2>
            </div>
            <div className="buttonView_thumbWrapper">
              <div className="buttonView_thumb buttonView_thumb--headneck"></div>
            </div>
          </>
        </Link>

        <Link to={`/torso`} className="button color-torso">
          <>
            <div className="buttonView_text">
              <h2>Torso</h2>
            </div>
            <div className="buttonView_thumbWrapper">
              <div className="buttonView_thumb buttonView_thumb--torso"></div>
            </div>
          </>
        </Link>

        <Link to={`/upperextremities`} className="button color-upper">
          <>
            <div className="buttonView_text">
              <h2>Upper Extremities</h2>
            </div>
            <div className="buttonView_thumbWrapper">
              <div className="buttonView_thumb buttonView_thumb--upper"></div>
            </div>
          </>
        </Link>

        <Link to={`/lowerextremities`} className="button color-lower">
          <>
            <div className="buttonView_text">
              <h2>Lower Extremities</h2>
            </div>
            <div className="buttonView_thumbWrapper">
              <div className="buttonView_thumb buttonView_thumb--lower"></div>
            </div>
          </>
        </Link>

        <Link to={`/othermsk`} className="button color-other">
          <>
            <div className="buttonView_text">
              <h2>Other MSK Procedure</h2>
            </div>
            <div className="buttonView_thumbWrapper">
              <div className="buttonView_thumb buttonView_thumb--lower"></div>
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

        {isMobile ? (
          <a href="https://apple.co/46cwThW" target="_blank">
            <img
              src={appStoreBanner}
              alt="Appstore banner"
              style={{
                maxWidth: "100%",
                padding: "7px 10px",
              }}
            />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default ButtonView;

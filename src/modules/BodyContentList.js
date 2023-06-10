import React from "react";

import bodyPartsListDB from "../contents/bodyPartsListDB";
import headneckDB from "../contents/headneckDB";
import torsoDB from "../contents/torsoDB";
import upperExtDB from "../contents/upperExtDB";
import lowerExtDB from "../contents/lowerExtDB";
import otherMskDB from "../contents/otherMskDB";
import "./BodyContentList.css";

import { ReactComponent as SelectedHead } from "../illustrations/head.svg";
import { ReactComponent as SelectedTorso } from "../illustrations/torso.svg";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link, useParams } from "react-router-dom";

function BodyContentList(props) {
  const params = useParams();

  return (
    <div className="bodyContentList">
      {params.bodyDetailList === "headneck" ? (
        <div className="bodyContentList--wrapper">
          <Link to="/" className="bodyContentList-back">
            Back
          </Link>
          <div className="bodyContentList--pageTitle">
            <h1>Head & Neck</h1>
          </div>
          {headneckDB.map((el) => {
            return (
              <Link
                to={`/headneck/${el.url}`}
                params={el}
                className="bodyContentList--item"
                key={el.name}
              >
                {/* <div className="bodyContentList--item-illustration">
                {el.illustration ? <img src={`${el.illustration}`} alt={el.name} /> : <SelectedHead />}
              </div> */}
                <div className="bodyContentList--item-text">
                  {el.name}
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}

      {params.bodyDetailList === "torso" ? (
        <div className="bodyContentList--wrapper">
          <Link to="/" className="bodyContentList-back">
            Back
          </Link>
          <div className="bodyContentList--pageTitle">
            <h1>Torso</h1>
          </div>
          {torsoDB.map((el) => {
            return (
              <Link
                to={`/torso/${el.url}`}
                params={el}
                className="bodyContentList--item"
                key={el.name}
              >
                {/* <div className="bodyContentList--item-illustration">
                <SelectedTorso />
              </div> */}
                <div className="bodyContentList--item-text">
                  {el.name}
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}

      {params.bodyDetailList === "upperextremities" ? (
        <div className="bodyContentList--wrapper">
          <Link to="/" className="bodyContentList-back">
            Back
          </Link>
          <div className="bodyContentList--pageTitle">
            <h1>Upper Extermities</h1>
          </div>
          {upperExtDB.map((el) => {
            return (
              <Link
                to={`/upperextremities/${el.url}`}
                params={el}
                className="bodyContentList--item"
                key={el.name}
              >
                {/* <div className="bodyContentList--item-illustration">
                <SelectedHead />
              </div> */}
                <div className="bodyContentList--item-text">
                  {el.name}
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}

      {params.bodyDetailList === "lowerextremities" ? (
        <div className="bodyContentList--wrapper">
          <Link to="/" className="bodyContentList-back">
            Back
          </Link>
          <div className="bodyContentList--pageTitle">
            <h1>Lower Extermities</h1>
          </div>
          {lowerExtDB.map((el) => {
            return (
              <Link
                to={`/lowerextremities/${el.url}`}
                params={el}
                className="bodyContentList--item"
                key={el.name}
              >
                {/* <div className="bodyContentList--item-illustration">
                <SelectedHead />
              </div> */}
                <div className="bodyContentList--item-text">
                  {el.name}
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}

      {params.bodyDetailList === "othermsk" ? (
        <div className="bodyContentList--wrapper">
          <Link to="/" className="bodyContentList-back">
            Back
          </Link>
          <div className="bodyContentList--pageTitle">
            <h1>Other MSK Procedure</h1>
          </div>
          {otherMskDB.map((el) => {
            return (
              <Link
                to={`/othermsk/${el.url}`}
                params={el}
                className="bodyContentList--item"
                key={el.name}
              >
                {/* <div className="bodyContentList--item-illustration">
                <SelectedHead />
              </div> */}
                <div className="bodyContentList--item-text">
                  {el.name}
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default BodyContentList;

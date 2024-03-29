import React, { useState } from "react";
import { Link } from "react-router-dom";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import "./List.css";
import headneckDB from "../contents/headneckDB";
import torsoDB from "../contents/torsoDB";
import upperExtDB from "../contents/upperExtDB";
import lowerExtDB from "../contents/lowerExtDB";
import otherMskDB from "../contents/otherMskDB";
import AppQRcode from "./AppQRcode";

function List() {
  const [listHead, setListHead] = useState(headneckDB);
  const [listTorso, setListTorso] = useState(torsoDB);
  const [listUpperExtremity, setListUpperExtremity] = useState(upperExtDB);
  const [listLowerExtremity, setListLowerExtremity] = useState(lowerExtDB);
  const [listOtherMsk, setListOtherMsk] = useState(otherMskDB);

  // Search state and function
  const [searchInput, setSerachInput] = useState("");
  const handleSearch = (e) => {
    let inputValue = e.target.value;
    setSerachInput(inputValue);

    // Keep the original list
    const originalHeadList = headneckDB;
    const originalTorsoList = torsoDB;
    const originalUpperExtremityList = upperExtDB;
    const originalLowerExtremityList = lowerExtDB;
    const originalOtherMskList = otherMskDB;

    // collect new list as a result
    let headVisible = [];
    let torsoVisible = [];
    let armsVisible = [];
    let legsVisible = [];
    let mskVisible = [];

    originalHeadList.map((el) => {
      if (
        el.name.includes(inputValue) ||
        el.url.includes(inputValue) ||
        el.name.toUpperCase().includes(inputValue)
      ) {
        headVisible.push(el);
      }
    });
    originalTorsoList.map((el) => {
      if (
        el.name.includes(inputValue) ||
        el.url.includes(inputValue) ||
        el.name.toUpperCase().includes(inputValue)
      ) {
        torsoVisible.push(el);
      }
    });
    originalUpperExtremityList.map((el) => {
      if (
        el.name.includes(inputValue) ||
        el.url.includes(inputValue) ||
        el.name.toUpperCase().includes(inputValue)
      ) {
        armsVisible.push(el);
      }
    });
    originalLowerExtremityList.map((el) => {
      if (
        el.name.includes(inputValue) ||
        el.url.includes(inputValue) ||
        el.name.toUpperCase().includes(inputValue)
      ) {
        legsVisible.push(el);
      }
    });
    originalOtherMskList.map((el) => {
      if (
        el.name.includes(inputValue) ||
        el.url.includes(inputValue) ||
        el.name.toUpperCase().includes(inputValue)
      ) {
        mskVisible.push(el);
      }
    });

    setListHead(headVisible);
    setListTorso(torsoVisible);
    setListUpperExtremity(armsVisible);
    setListLowerExtremity(legsVisible);
    setListOtherMsk(mskVisible);
  };

  return (
    <div className="list">
      <div className="listWrap">
        <div className="listWrapper-box">
          {/* Search start */}
          <div className="listSearch">
            <label htmlFor="search" className="smallText">
              Search
            </label>
            <input
              type="search"
              id="search"
              onChange={handleSearch}
              value={searchInput}
            />
          </div>
          {/* Search end */}

          {listHead.length >= 1 ? (
            <>
              <div className="listSubHeadline color-headneck">
                <h2>Head and Neck</h2>
              </div>
              <ul>
                {listHead.map((el) => (
                  <Link
                    to={`/headneck/${el.url}`}
                    className="list--head"
                    key={el.url}
                  >
                    {el.name} <KeyboardArrowRightRoundedIcon />
                  </Link>
                ))}
              </ul>
            </>
          ) : null}

          {listTorso.length >= 1 ? (
            <>
              <div className="listSubHeadline color-torso">
                <h2>Torso</h2>
              </div>
              <ul>
                {listTorso.map((el) => (
                  <Link
                    to={`/torso/${el.url}`}
                    className="list--torso"
                    key={el.url}
                  >
                    {el.name} <KeyboardArrowRightRoundedIcon />
                  </Link>
                ))}
              </ul>
            </>
          ) : null}

          {listUpperExtremity.length >= 1 ? (
            <>
              <div className="listSubHeadline color-upper">
                <h2>Upper Extremity</h2>
              </div>
              <ul>
                {listUpperExtremity.map((el) => (
                  <Link
                    to={`/upperextremities/${el.url}`}
                    className="list--arms"
                    key={el.url}
                  >
                    {el.name} <KeyboardArrowRightRoundedIcon />
                  </Link>
                ))}
              </ul>
            </>
          ) : null}

          {listLowerExtremity.length >= 1 ? (
            <>
              <div className="listSubHeadline color-lower">
                <h2>Lower Extremity</h2>
              </div>
              <ul>
                {listLowerExtremity.map((el) => (
                  <Link
                    to={`/lowerextremities/${el.url}`}
                    className="list--legs"
                    key={el.url}
                  >
                    {el.name} <KeyboardArrowRightRoundedIcon />
                  </Link>
                ))}
              </ul>
            </>
          ) : null}

          {listOtherMsk.length >= 1 ? (
            <>
              <div className="listSubHeadline color-other">
                <h2>Other MSK Procedure</h2>
              </div>
              <ul>
                {listOtherMsk.map((el) => (
                  <Link
                    to={`/othermsk/${el.url}`}
                    className="list--msk"
                    key={el.url}
                  >
                    {el.name} <KeyboardArrowRightRoundedIcon />
                  </Link>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default List;

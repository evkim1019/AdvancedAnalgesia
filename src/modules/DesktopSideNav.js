import React, { useState } from "react";
import "./DesktopSideNav.css";

// icons
// import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import { Link, useParams } from "react-router-dom";

function DesktopSideNav() {
  const params = useParams();

  console.log("Object.values(params)[0]", Object.values(params)[0]);

  // Bottom Nav selection Toggle States & function
  const [selectedNav, setSelectedNav] = useState([
    // { label:"one", value: Object.values(params)[0] !== 'basics' && Object.values(params)[0] !== 'list' && Object.values(params)[0] !== 'info' ? true : false},
    {
      label: "one",
      value: Object.values(params)[0] === undefined ? true : false,
    },
    {
      label: "two",
      value: Object.values(params)[0] === "basics" ? true : false,
    },
    {
      label: "three",
      value: Object.values(params)[0] === "list" ? true : false,
    },
    {
      label: "four",
      value: Object.values(params)[0] === "info" ? true : false,
    },

    {
      label: "intro",
      value: Object.values(params)[0] === "basics" ? true : false,
    },
    {
      label: "headneck",
      value: Object.values(params)[0] === "headneck" ? true : false,
    },
    {
      label: "torso",
      value: Object.values(params)[0] === "torso" ? true : false,
    },
    {
      label: "upperextremities",
      value: Object.values(params)[0] === "upperextremities" ? true : false,
    },
    {
      label: "lowerextremities",
      value: Object.values(params)[0] === "lowerextremities" ? true : false,
    },
    {
      label: "othermsk",
      value: Object.values(params)[0] === "othermsk" ? true : false,
    },
  ]);
  const sideNavSelectToggle =
    ({ selectedNav, setSelectedNav, sideNavSelectToggle }) =>
    (label) => {
      const newSideNavSelected = selectedNav.map((nav) => {
        if (nav.label === label) {
          return (nav = { label: nav.label, value: true });
        } else {
          return (nav = { label: nav.label, value: false });
        }
      });
      setSelectedNav(newSideNavSelected);
    };

  return (
    <div id="desktopSideNav">
      <div className="desktopSideNav--wrapper smallText">
        <Link
          to="/"
          onClick={() =>
            sideNavSelectToggle({ selectedNav, setSelectedNav })("one")
          }
          className={`desktopSideNav--item desktopSideNav--itemOne ${
            selectedNav[0].value === true ? "sideNavActive" : "sideNavInactive"
          }`}
        >
          <CabinRoundedIcon />
          <p>Home</p>
        </Link>
        {/* Home sub nav */}
        <div className="sideSubNavWrapper">
          <Link
            to="/basics"
            onClick={() =>
              sideNavSelectToggle({ selectedNav, setSelectedNav })("intro")
            }
            className={`desktopSideNav--item ${
              selectedNav[4].value === true
                ? "sideNavActive"
                : "sideNavInactive"
            }`}
          >
            <p>Introduction</p>
          </Link>
          <Link
            to="/headneck"
            onClick={() =>
              sideNavSelectToggle({ selectedNav, setSelectedNav })("headneck")
            }
            className={`desktopSideNav--item ${
              selectedNav[5].value === true
                ? "sideNavActive"
                : "sideNavInactive"
            }`}
          >
            <p>Head and Neck</p>
          </Link>
          <Link
            to="/torso"
            onClick={() =>
              sideNavSelectToggle({ selectedNav, setSelectedNav })("torso")
            }
            className={`desktopSideNav--item ${
              selectedNav[6].value === true
                ? "sideNavActive"
                : "sideNavInactive"
            }`}
          >
            <p>Torso</p>
          </Link>
          <Link
            to="/upperextremities"
            onClick={() =>
              sideNavSelectToggle({ selectedNav, setSelectedNav })(
                "upperextremities"
              )
            }
            className={`desktopSideNav--item ${
              selectedNav[7].value === true
                ? "sideNavActive"
                : "sideNavInactive"
            }`}
          >
            <p>Upper Extermities</p>
          </Link>
          <Link
            to="/lowerextremities"
            onClick={() =>
              sideNavSelectToggle({ selectedNav, setSelectedNav })(
                "lowerextremities"
              )
            }
            className={`desktopSideNav--item ${
              selectedNav[8].value === true
                ? "sideNavActive"
                : "sideNavInactive"
            }`}
          >
            <p>Lower Extermities</p>
          </Link>
          <Link
            to="/othermsk"
            onClick={() =>
              sideNavSelectToggle({ selectedNav, setSelectedNav })("othermsk")
            }
            className={`desktopSideNav--item ${
              selectedNav[9].value === true
                ? "sideNavActive"
                : "sideNavInactive"
            }`}
          >
            <p>Other MSK</p>
          </Link>
        </div>

        <Link
          to="/list"
          onClick={() =>
            sideNavSelectToggle({ selectedNav, setSelectedNav })("three")
          }
          className={`desktopSideNav--item desktopSideNav--itemThree ${
            selectedNav[2].value === true ? "sideNavActive" : "sideNavInactive"
          }`}
        >
          <SearchRoundedIcon />
          <p>Search</p>
        </Link>

        <Link
          to="/last"
          onClick={() =>
            sideNavSelectToggle({ selectedNav, setSelectedNav })("four")
          }
          className={`desktopSideNav--item desktopSideNav--itemFour ${
            selectedNav[3].value === true ? "sideNavActive" : "sideNavInactive"
          }`}
        >
          <NotificationImportantOutlinedIcon />
          <p>LAST Algorithm</p>
        </Link>
      </div>
    </div>
  );
}

export default DesktopSideNav;

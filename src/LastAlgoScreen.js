import React from "react";

import "./LastAlgoScreen.css";

import lastGraphChart from "./contents/contentImg/relationshipOfSignSymptomsOfToxicityToSerumLidocaineConcentrations.png";
import lastAlgo from "./contents/contentImg/lastAlgorithm.png";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

function LastAlgoScreen() {
  return (
    <div className="lastAlgoScreen">
      <div className="lastAlgoContent">
        <h2>Local Anesthetic Systemic Toxicity (LAST)</h2>
        <div className="lastTitleMsg">
          <NotificationsActiveIcon />
          <h3>LIFE-THREATENING</h3>
        </div>

        <div className="lastFactsWrapper">
          <div>
            <p className="lastFactTitle">
              Onset: Immediate • ~60 min post-injection
            </p>
          </div>
          <div>
            <p className="lastFactTitle">Signs/Symptoms</p>
            <ul>
              <li>
                40% present as sudden, rapid-onset seizure leading to cardiac
                arrest
              </li>
              <li>
                Typical early signs are prodromal
                <br />– Tongue numbness, tinnitus, confusion, dysarthria
              </li>
              <li>
                CNS changes
                <br />– Seizures{" "}
                <ArrowForwardOutlinedIcon
                  style={{ width: "20px", verticalAlign: "middle" }}
                />{" "}
                coma
              </li>
              <li>
                CV changes
                <br />– HTM/tachycardia{" "}
                <ArrowForwardOutlinedIcon
                  style={{ width: "20px", verticalAlign: "middle" }}
                />{" "}
                hypotension/bradycardia{" "}
                <ArrowForwardOutlinedIcon
                  style={{ width: "20px", verticalAlign: "middle" }}
                />{" "}
                arrhythmias{" "}
                <ArrowForwardOutlinedIcon
                  style={{ width: "20px", verticalAlign: "middle" }}
                />{" "}
                asystole
              </li>
            </ul>
          </div>
          <div>
            <p className="lastFactTitle">Risk Factors</p>
            <ul>
              <li>
                Type/dose of local anesthetic
                <br />– Higher incidence with more lipophilic LAs (bupivacaine)
              </li>
              <li>
                Injection site
                <br />– Higher incidence with paravertebral nerve blocks,
                followed by upper extremity, followed by torso/lower extremity
              </li>
              <li>Extremes of age</li>
              <li>Small size/weight</li>
              <li>Limited muscle mass</li>
              <li>
                Comorbidities
                <br />
                – Extreme caution in patients with heart failure, severe vavular
                pathology
                <br />– Caution in patients with hepatic/renal dysfunction
              </li>
            </ul>
          </div>
        </div>

        <div className="lastImg">
          <img
            src={lastGraphChart}
            alt="Relationship of sign/symptoms of toxicity to serum lidocaine concentrations"
          />
          <p className="lastImgCaption">
            Relationship of sign/symptoms of toxicity to serum lidocaine
            concentrations
          </p>
        </div>
        <div className="lastImg">
          <img
            src={lastAlgo}
            alt="Local Anesthetic Systemic Toxicity(LAST) algorithm"
          />
          <p className="lastImgCaption">
            Local Anesthetic Systemic Toxicity(LAST) algorithm
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastAlgoScreen;

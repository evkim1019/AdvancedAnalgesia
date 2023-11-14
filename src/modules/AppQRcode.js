import React from "react";

import emraRaQr from "../contents/contentImg/EMRA-RA-QR.png";

import "./AppQRcode.css";

function AppQRcode() {
  return (
    <div className="QRcode">
      <p>
        Download on
        <br />
        the App Store
      </p>
      <img src={emraRaQr} alt="EMRA RA QR code" />
    </div>
  );
}

export default AppQRcode;

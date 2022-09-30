import React from 'react'
import './NonMobile.css'


import qrCode from '../illustrations/AA-qr.png'

function NonMobile() {
  return (
    <div className="nonMobile">
      <div className="nonMobile__content">

        <p className="nonMobile_logo">Advanced Analgesia</p>
        <br />
        <h1>Scan QR code below</h1>
        <p>For the full experience, please scan the QR code with your mobile phone.</p>
        <br /><br />
        <img className="nonMobile__content-qr" src={`${qrCode}`} alt="" />
      </div>
    </div>
  )
}

export default NonMobile
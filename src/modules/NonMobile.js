import React from 'react'
import './NonMobile.css'

function NonMobile() {
  return (
    <div className="nonMobile">
      <div className="nonMobile__content">
        <h1>Scan QR code below</h1>
        <p>For the full experience, please scan the QR code with your mobile phone.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" />

      </div>
    </div>
  )
}

export default NonMobile
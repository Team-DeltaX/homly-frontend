import React from "react"
import "./MainHolidayHomePhoto.css"

export default function MainHolidayHomePhoto(props) {
  return (
    <div className="group-384">
      <div className="host-info">
        <div className="host-image">{props}</div>
        <div className="group-063">
          <p className="listed-by">Listed By:</p>
          <p className="john-doberman">John Doberman</p>
          <p className="for-10005000">For: $ 1000 - $ 5000</p>
        </div>
      </div>
    </div>
  )
}

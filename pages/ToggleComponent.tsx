import React, { useState } from "react"

import bg from "./dalle1.png"

const ToggleComponent: React.FC = () => {
  const [showDiv, setShowDiv] = useState(false)

  const toggleDiv = () => {
    setShowDiv(!showDiv)
  }

  return (
    <div>
      <button onClick={toggleDiv}>Toggle Div</button>
      <div
        style={{
          display: showDiv ? "block" : "none",
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        This is the div element that will be shown or hidden when the button is
        clicked.
      </div>
      {/* <div style={{ display: showDiv ? "block" : "none" }}>
        <img src="dalle1.png"></img>
        This is the div element that will be shown or hidden when the button is
        clicked.
      </div> */}
    </div>
  )
}

export default ToggleComponent

import React from 'react'

const Weather = () => {
  return (
    <div className="mainDiv">
        <div className="div1">
                <input type="text" placeholder="Search"  />
                <h1>Delhi</h1>
                <h4 className='temp'>26°C</h4>  
        </div>
    </div>
  )
}

export default Weather
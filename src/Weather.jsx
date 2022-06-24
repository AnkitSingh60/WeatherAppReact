import React, { useState } from 'react'

const Weather = () => {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("")
  return (
    <div className="mainDiv">
        <div className="div1">
                <input type="search" onChange={()=>{}} placeholder="Search"  />
                <h1>Delhi</h1>
                <h4 className='temp'>26°C</h4>  
        </div>
    </div>
  )
}

export default Weather
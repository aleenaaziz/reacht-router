import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

  const[widthCount, setWidthCount]= useState(window.screen.width);
  
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    
    return () => {
      window.removeEventListener("resize" , actualWidth)
    }
  });
  
    const actualWidth = () => {
      setWidthCount(window.innerWidth);
    }


  return (
    <div>
        <p>the actual size of the window is:</p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect2

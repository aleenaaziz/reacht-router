import React, { useState } from 'react'

const UseStateObj = () => {
    const[myObject, setMyObject] = useState({
        myName:"alina", myAge:27, degree:"inter"
    });
    const changeObject = () => {
        setMyObject({...myObject, myName:'sony'});
    }
  return (
    <div>
      <h1>Name: {myObject.myName} & age: {myObject.myAge} & degree:{myObject.degree}
      </h1> 
      <button onClick={changeObject}>update</button>
    </div>
  )
}

export default UseStateObj

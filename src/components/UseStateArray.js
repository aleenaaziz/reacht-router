import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData = [
        {
            myName:"alina", myAge:19, degree:1
        },{
            myName:"ammara", myAge:22, degree:2
        },{
            myName:"aiena", myAge:26, degree:3
        }

    ]
    const[myArray, setmyArray] = useState(bioData);
    const clearArray = () => {
        setmyArray([]);
    }
    const removeElm = (degree) => {
        const myNewArray = myArray.filter((curElm) => {
            return curElm.degree !== degree;
        })

        setmyArray(myNewArray);
    }
  return (
    <div>
        
        {
            myArray.map((curElm) =>{ 

            return(

            <h1 key={curElm.degree}>Name: {curElm.myName} & Age: {curElm.myAge}
            <button onClick={() => removeElm(curElm.degree)}>remove</button>
            </h1>

            );
        } )
        }
        <button onClick={clearArray}> clear</button>
    </div>
  )
}

export default UseStateArray;

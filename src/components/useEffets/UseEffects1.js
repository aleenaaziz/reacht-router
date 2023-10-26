import React, { useEffect, useState } from 'react';
import UseTitleCount from './UseTitleCount';

const UseEffects1 = () => {
    const [count,setCount] = useState(0);
    UseTitleCount(count);
    console.log("hello wor");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default UseEffects1

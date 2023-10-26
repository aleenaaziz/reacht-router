import React, { useContext } from 'react'
import { BioData } from './ComA'

const ComC = () => {
    const myName = useContext(BioData);
  return <h1>hello ComC {myName}</h1>
}

export default ComC
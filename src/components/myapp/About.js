import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/index ')
    }
  return (
    <div>
      about
     <button onClick={() => goToContact()}>contact us</button>

    </div>
  )
}

export default About

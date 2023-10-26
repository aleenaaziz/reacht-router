import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        this is my Home
      <Nav />
      <Outlet/>
    </div>
  )
}

export default Home

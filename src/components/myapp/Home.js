import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        home
      <Nav />
      <Outlet/>
    </div>
  )
}

export default Home

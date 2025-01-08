import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const ELayout = ({cart}) => {
  return (
    <>
        <Navbar cart={cart}></Navbar>
        <main>
            <Outlet></Outlet>
        </main>
    </>

  )
}

export default ELayout
import React from 'react'
import { Outlet } from 'react-router-dom'

import TopHeader from './components/TopHeader'
import BottomFooter from './components/BottomFooter'
const Layout = () => {
  return (
    <div>
      <TopHeader/>
      <Outlet/>
      <BottomFooter/>
    </div>
  )
}

export default Layout
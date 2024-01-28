import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import HeroSectionManager from '../components/herosection/HeroSectionManager'

const HeroSectionManagerPage = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer w-full ">
        <Navbar/>
        <HeroSectionManager/>
      </div>

    </div>
  )
}

export default HeroSectionManagerPage
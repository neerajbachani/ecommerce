import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import AllProductsTable from '../components/products/AllProductsTable'

const AllProductsPage = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer flex flex-col">
        <Navbar/>
        <AllProductsTable/>
      </div>
    </div>
  )
}

export default AllProductsPage
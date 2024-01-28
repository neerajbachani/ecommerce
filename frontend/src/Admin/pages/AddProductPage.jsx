import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import AddProduct from '../components/addproduct/AddProduct'

const AddProductPage = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer w-full ">
        
        <AddProduct/>
      </div>

    </div>
  )
}

export default AddProductPage
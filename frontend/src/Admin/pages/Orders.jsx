import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import OrderTable from '../components/ordertable/OrderTable'
import AddProduct from '../components/addproduct/AddProduct'


const Orders = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer w-full ">
        <Navbar/>
        <OrderTable/>
      </div>

    </div>
  )
}

export default Orders
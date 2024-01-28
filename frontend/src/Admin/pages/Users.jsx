import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Datatable from '../components/datatable/Datatable'

const Users = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer flex flex-col">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default Users
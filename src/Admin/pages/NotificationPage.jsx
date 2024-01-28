import React from 'react'
import NotificationBase from '../components/notification/NotificationBase'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'

const NotificationPage = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer w-full ">
        <Navbar/>
        <NotificationBase/>
      </div>

    </div>
  )
}

export default NotificationPage
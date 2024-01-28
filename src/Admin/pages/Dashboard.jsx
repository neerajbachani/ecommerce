import React from 'react'
import Chart from '../components/chart/Chart'
import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Table from '../components/table/Table'
import Widget from '../components/widget/Widget'
import Datatable from '../components/datatable/Datatable'
import Notification from '../components/notification/Notification'
import NotificationBase from '../components/notification/NotificationBase'



const Dashboard = () => {

  return (
    <>
    <div className="home flex text-3xl max-w-screen-xl mx-auto ">
      <Sidebar />
      <div className="homeContainer   ">
        <Navbar  />
        <div className="widgets flex p-10 gap-10  ">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          {/* <Widget type="balance" /> */}
        </div>
        <div className="charts flex p-7 gap-7 ">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle font-poppins font-medium text-[#808080] mb-5 mt-10 ">Latest Transactions</div>
          <Table />

    



          
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Dashboard
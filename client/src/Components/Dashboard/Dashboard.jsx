import React from 'react'
import BodySection from '../../Components/Dashboard/Components/Body Section/BodySection'
import Sidebar from '../../Components/Dashboard/Components/SideBar Section/Sidebar'
// import Body from '../Dashboard/Components/BodySection'

const Dashboard = () => {
  return (
    <div>
      <div className="container">
        {/* <h1>welcome to Dashboard</h1> */}
        <Sidebar />
        <BodySection />
      </div>
    </div>
  )
}

export default Dashboard

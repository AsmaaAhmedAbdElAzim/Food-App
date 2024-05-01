import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from './../Navbar/Navbar';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

export default function MasterLayout({loginData}) {
  return (<>

<div className="d-flex">
      <div >
        <SideBar/>
      </div>

      
        <div className='w-100 container-fluid'>
          <Navbar loginData={loginData}/>
          
          <Outlet/>
        </div>
     
    </div>
  

   
  </>
   
  )
}

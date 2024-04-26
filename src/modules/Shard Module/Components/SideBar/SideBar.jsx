import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import togelar from '../../../../img/3.png'

export default function SideBar() {
  let [isColapsed , setIsColapsed]=useState(false);
  const toggelerCollaps = ()=>{
    setIsColapsed(!isColapsed)
  }
  let navigate = useNavigate();

  const logOut=()=>{
    localStorage.removeItem('token');
    navigate('/login')

  }
  return (<>

 <div className='sideBarContainer '>
 <Sidebar collapsed={isColapsed} onClick={toggelerCollaps}>
  <Menu>
   
    <MenuItem> <img src={togelar} alt="" /></MenuItem>
    <MenuItem icon={<i class="fa-solid fa-house"></i>} component={<Link to="/dashboard" />}> Home </MenuItem>
    <MenuItem icon={<i class="fa-solid fa-users"></i>}component={<Link to="/dashboard/user" />}> Users </MenuItem>
    <MenuItem icon={<i class="fa-solid fa-rectangle-list"></i>} component={<Link to="/dashboard/recipes" />}> Recipes </MenuItem>
    <MenuItem icon={<i class="fa-regular fa-calendar-days"></i>}component={<Link to="/dashboard/categories" />}> Categories </MenuItem>
    <MenuItem icon={<i class="fa-solid fa-unlock-keyhole"></i>}> Change Password </MenuItem>
    <MenuItem icon={<i class="fa-solid fa-right-from-bracket"></i>} onClick={logOut}> LogOut </MenuItem>
  </Menu>
</Sidebar>
 </div>


  </>
    
  )
}

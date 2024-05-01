import React from 'react';
import avatar from '../../../../img/avatar.png'

export default function Navbar({loginData}) {
  console.log(loginData);
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary  rounded-3">
  <div className="container-fluid ">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      
      <form  >
        <input className="form-control " type="search" placeholder="Search Here" aria-label="Search"/>
        <span><i className="fa-solid fa-magnifying-glass"></i></span>
        
      </form>
   
  
   <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
        {loginData?loginData.userName:'' }
            <img src={avatar} alt="avatar" className='px-2'/>
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          <i className="fa-solid fa-bell"></i>
          </a>
          
        </li>
      
       
       
      </ul>
  
     
    </div>
    
</div>
   
      
   
  
</nav>
  </>
    
  )
}

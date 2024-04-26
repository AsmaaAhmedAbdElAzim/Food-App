import React from 'react'
import logo from '../../../../img/logo.png'
import notfound from '../../../../img/Group 48101676.png'
// import style from './NotFound.Module.css'

export default function NotFoundPage() {
  return (<>
  
  <div className={`container-fluid bg-notfound`}>
  {/* <div className={`container-fluid ${style.bg-notfound}`}> */}
    <div className='w-75'>
       <img src={logo} alt="" />
    </div>
   
    {/* <div className={`d-flex justify-content-around align-items-center  ${style.notfoundContainer}`}> */}
    <div className={`d-flex justify-content-around align-items-center notfoundContainer`}>
      <div className={`notFoundInfo px-5 `}>
      {/* <div className={`${style.notFoundInfo} px-5 `}> */}
        <h3>Oops.... </h3>
        <h6>Page  not found </h6>
        <p>This Page doesn’t exist or was removed! We suggest you  back to home.</p>
        <button className='w-75'><span className='px-3'><i class="fa-solid fa-arrow-left"></i></span>Back To Home</button>
      </div>
      <div className='w-100  text-center'>
        <img src={notfound} alt=" " className='w-75'  />
      </div>
    </div>
  
  </div>
  </>
    
  )
}

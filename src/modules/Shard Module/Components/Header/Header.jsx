import React from 'react'




export default function Header({title1,title2,discripation,ImgUrl}) {
  return (<>
  <div className="container-fluid bg-header   my-3">
    <div className="row  align-items-center justify-content-center px-5">
      <div className="col-lg-8 p-0">
      <div className='header-info   text-light  '>
        <h2 ><span className='pe-3'>{title1}</span>{title2}</h2>
        <p className='text-light w-75'>{discripation}</p>
      </div>
      </div>
      <div className="col-lg-4  p-0">
      <div className="header-img   d-flex justify-content-center">
        <img src={ImgUrl} alt="" className='w-75'/>
      </div>
      </div>
      
    </div>
  </div>
  </>
    
  )
}

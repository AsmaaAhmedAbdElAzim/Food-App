import React from 'react'
import noDataImg from '../../../../img/no-data.png'

export default function NoDataTabel() {
  return (<>
  <div className="container-fluid d-flex justify-content-center align-items-center  ">
    <div className=' text-center noData-info'>
       <img src={noDataImg} alt="" className='w-25'/> 
       <h2 className='text-center py-3'>No Data !</h2>
       <p>are you sure you want to delete this item ? if you are sure just click on delete it</p>

       
    </div>
    
  </div>

  </>
   
  )
}

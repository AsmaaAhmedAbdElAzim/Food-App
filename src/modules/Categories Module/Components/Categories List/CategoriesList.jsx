import React, { useEffect, useState } from 'react'
import Header from '../../../Shard Module/Components/Header/Header'
import catigoriesImg from '../../../../img/header.png'
import axios from 'axios'
import NoDataTabel from '../../../Shard Module/Components/NoDataInTabel/NoDataTabel'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form'
import DelelteData from '../../../Shard Module/Components/DeleteData/DelelteData'



export default function CategoriesList() {
  
  const [mode, setMode] = useState('add');
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);
  let [CatigoryList , setCatigoryList]= useState([]);
  let [idItem , setIdItem] = useState('')


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setMode('add');
    setShow(true)
  };



 const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = (id) => {
    setIdItem(id)
    setShowDelete(true)};

    const handelUpdatShow=(id)=>{

      setMode('update');
      setIdItem(id);

      const selectedCategory = CatigoryList.find((item) => item.id === id);
      setSelectedCategoryData(selectedCategory);
      setShow(true);

    }
  let {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm()

 const onSubmitUpdateData =async(data)=>{
  try{
    let respons = await axios.put(`https://upskilling-egypt.com:3006/api/v1/Category/${idItem}`,data,
    {
      headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
    })
   
   console.log(respons);
    handleClose();
    getCatigoryList();

  }
  catch (error){
    console.log(error);
    
  }
 }
  const onSubmitAddData = async(data)=>{
    
    try{
      let respons = await axios.post('https://upskilling-egypt.com:3006/api/v1/Category/',data,
      {
        headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
      })
     
     
      handleClose();
      getCatigoryList();

    }
    catch (error){
      console.log(error);
      
    }
   
  }
  const getCatigoryList= async()=>{
    try{
      let respons = await axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1',
    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
  
      setCatigoryList(respons.data.data);
     

    }
    catch (error){
     
      console.log(error.message);
      
    }
  }


const onsubmitDelete=async()=>{

 
  try{
    let respons = await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Category/${idItem}`,
  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})

  handleDeleteClose();
  getCatigoryList();
   

  }
  catch (error){
   
    console.log(error);
    
  }

}

  useEffect(() => {
    getCatigoryList()
  
  }, [])
  
  return (<>
  <Header 
  title1={'Categories'} 
  title2={'Items'} 
  discripation={'You can now add your items that any user can order it from the Application and you can edit'} 
  ImgUrl={catigoriesImg}/>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <h4>{mode === 'add' ? 'Add Category' : 'Update Category'}</h4>
        </Modal.Header>
        <Modal.Body>
          {mode === 'add'?(
            <form onSubmit={handleSubmit(onSubmitAddData)}>
            <div className="input-group mb-3">
            
              <input
                type="text"
                className="form-control"
                placeholder="category Name"
                aria-label="Useremail"
                aria-describedby="basic-addon1"
                {...register('name' ,{
                  required:'Category Name  Is Requered',
                
                }) 
                
                }
              />
            </div>

            {errors.name && <p className="alert alert-danger p-1">{errors.name.message}</p>}
            <button>Save</button>

            </form>
          ):(
            <form onSubmit={handleSubmit(onSubmitUpdateData)}>
            <div className="input-group mb-3">
            
              <input
                type="text"
                className="form-control"
                placeholder="category Name"
                aria-label="Useremail"
                aria-describedby="basic-addon1"
                defaultValue={selectedCategoryData?.name}
                {...register('name' ,{
                  required:'Category Name  Is Requered',
                
                }) 
                
                }
              />
            </div>

            {errors.name && <p className="alert alert-danger p-1">{errors.name.message}</p>}
            <button>Save</button>

            </form>
          )}

        
        </Modal.Body>
      
      </Modal>




      <Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
        <h4>Delete Item</h4>
        </Modal.Header>
        <Modal.Body>

       <DelelteData deleteItem='Category'/>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="bg-danger" className='btn btn-outline-danger ' onClick={onsubmitDelete}> Delete This Item</Button>
        </Modal.Footer>
      
      </Modal>




  <div className="container-fluid">
    <div className="row ">
      <div className="col-md-8 ">
        <h4>Categories Table Details</h4>
        <p>You can check all details</p>
      </div>
      <div className="col-md-4 text-end ">
        <button className='w-50  ' onClick={handleShow}>Add New Category</button>
      </div>
    </div>


    <table className="table  table-hover">
   
  <thead  >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Catigory Name</th>
      <th scope="col">Creation Data</th>
      {/* <th scope="col"></th> */}
      
      <th scope="col">Action</th>
    </tr>
  </thead>
 
  <tbody>
    {CatigoryList.length>0?(
      CatigoryList.map((item,index)=>
       <tr key={index}>
        <th scope="row">{index + 1}</th>
       <td>{item.name}</td>
       <td>{item.creationDate}</td>
       {/* <td>{item.modificationDate}</td> */}
       <td>
        
       <i  onClick={()=>handleDeleteShow(item.id)} class="fa-solid fa-trash px-2 text-danger"></i>
       <i onClick={()=>handelUpdatShow(item.id)}class="fa-solid fa-pen-to-square text-success"></i>
       </td>
     </tr>
    
    )):<tr>
      <td colSpan='4'><NoDataTabel/></td>
    </tr>
     }
   
   
   
  </tbody>

</table>
  </div>

  </>
    
  )
}

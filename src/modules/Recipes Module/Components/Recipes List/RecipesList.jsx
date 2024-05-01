import React, { useEffect, useState } from 'react'
import Header from '../../../Shard Module/Components/Header/Header'
import catigoriesImg from '../../../../img/header.png';
import axios from 'axios';
import NoDataTabel from '../../../Shard Module/Components/NoDataInTabel/NoDataTabel';
import noDataImg from '../../../../img/no-data.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DelelteData from '../../../Shard Module/Components/DeleteData/DelelteData';

export default function RecipesList() {

  let [recipesList , setRecipesList]= useState([]);
  let [idItem , setIdItem] = useState('')

  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = (id) => {
    setIdItem(id)
    setShowDelete(true)};

const getRecipesList =async()=>{
  try{
    let respons = await axios.get('https://upskilling-egypt.com:3006/api/v1/Recipe/?pageSize=10&pageNumber=1',
  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})

    setRecipesList(respons.data.data);
   

  }
  catch (error){
 
    console.log(error.message);
    
  }
}

const onsubmitDelete=async()=>{

 
  try{
    let respons = await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Recipe/${idItem}`,
  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})

  handleDeleteClose();
  getRecipesList();
   

  }
  catch (error){
   
    console.log(error);
    
  }

}



  useEffect(() => {
    getRecipesList()
  
  }, [])
  return (<>
   <Header
  title1={'Recipes'} 
  title2={'Items'} 
  discripation={'You can now add your items that any user can order it from the Application and you can edit'} 
  ImgUrl={catigoriesImg}/>

<Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
        <h4>Delete Item</h4>
        </Modal.Header>
        <Modal.Body>

       <DelelteData deleteItem='Recipes'/>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="bg-danger" className='btn btn-outline-danger ' onClick={onsubmitDelete}> Delete This Item </Button>
        </Modal.Footer>
      
      </Modal>





<div className="container-fluid ">
    <div className="row ">
      <div className="col-md-8 ">
        <h4>Recipes Table Details</h4>
        <p>You can check all details</p>
      </div>
      <div className="col-md-4 text-end ">
        <button className='w-50  '>Add New Item</button>
      </div>
    </div>
    <div className="d-flex align-items-start justify-content-between recipesInput my-3 ">
      <div className="w-75">
      <form  >
        <input className="form-control " type="search" placeholder="Search Here" aria-label="Search"/>
        <span><i className="fa-solid fa-magnifying-glass"></i></span>
        
      </form>
   
      </div>

      <div className="  d-flex ">
      <div className="dropdown mx-5">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Tag
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>

    </div>

    <table className="table  table-hover mt-5">
    <thead  >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Discripation</th>
      <th scope="col">Tag</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {recipesList.length > 0 ?(
      recipesList.map((item,index)=>
      <tr key={index}>
       <td scope="row">{index + 1}</td>
      <td>{item.name}</td>
     <td className='imgTabel'>{item. imagePath?<img src={'https://upskilling-egypt.com:3006/'+item. imagePath} alt='imgTabel' />:<img src={noDataImg} alt='no img' className='w-25'/>}</td> 
      <td>{item.price}</td>
      <td>{item.description}</td>
     
      <td>{item.tag.name}</td> 
      <td>{item.category[0]?item.category[0].name:''}</td>
      <td>
       
      <i  onClick={()=>handleDeleteShow(item.id)}  class="fa-solid fa-trash px-2 text-danger"></i>
      <i class="fa-solid fa-pen-to-square text-success"></i>
      </td>
    </tr>)
    ):(
      <tr>
      <td colSpan='4'><NoDataTabel/></td>
    </tr>
    )}
    
  </tbody>
    </table>
    </div>
    </>)}
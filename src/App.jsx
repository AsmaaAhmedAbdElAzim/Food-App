import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import AuthLayout from './modules/Shard Module/Components/AuthLayout/AuthLayout';
import NotFoundPage from './modules/Shard Module/Components/NotFoundPage/NotFoundPage';
import Dashboard from './modules/Home Module/Components/Dashboard/Dashboard';
import MasterLayout from './modules/Shard Module/Components/MasterLayout/MasterLayout';
import RecipesList from './modules/Recipes Module/Components/Recipes List/RecipesList';
import CategoriesList from './modules/Categories Module/Components/Categories List/CategoriesList';
import UserList from './modules/User Module/Components/User List/UserList';
import Login from './modules/Athuntaction Module/Components/Login/Login';
import Register from './modules/Athuntaction Module/Components/Register/Register';
import ForgetPassword from './modules/Athuntaction Module/Components/ForgetPassword/ForgetPassword';
import ChangePassword from './modules/Athuntaction Module/Components/ChangePassword/ChangePassword';
import RestPassword from './modules/Athuntaction Module/Components/RestPassword/RestPassword';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import ProtectRout from './modules/Shard Module/Components/ProtectRout/ProtectRout';

function App() {

  let [loginData,setLoginData] = useState(null);
  const saveUserData =()=>{
    let incodedToken = localStorage.getItem('token');
    let decodedToken = jwtDecode(incodedToken) ;
    // console.log(decodedToken);
    setLoginData(decodedToken)
    // console.log(loginData);
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      saveUserData()
    }
  },[])
  let router = createBrowserRouter([{
    path:'/',
    element:<AuthLayout/>,
    errorElement:<NotFoundPage/>,
    children:[
      {index:true,element:<Login saveUserData={saveUserData}/>},
      {path:'login',element:<Login saveUserData={saveUserData}/>},
      {path:'register',element:<Register/>},
      {path:'forgetpass',element:<ForgetPassword/>},
      {path:'changepass',element:<ChangePassword/>},
      {path:'resrtepass',element:<RestPassword/>},
    ]
  },{
    path:'dashboard',
    element:
    <ProtectRout loginData={loginData}>
            <MasterLayout loginData={loginData}/>
            </ProtectRout>,
            
    errorElement:<NotFoundPage/>,
    children:[
      {index:true,element:<Dashboard/>},
      {path:'dashboard',element:<Dashboard/>},
      {path:'recipes',element:<RecipesList/>},
      {path:'categories',element:<CategoriesList/>},
      {path:'user',element:<UserList/>},
    ]
  }])

  return (
    <>
    <ToastContainer />
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

import React from 'react'
import logo from "../../../../img/logo.png";
import style from './ForgetPass.module.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm()

  const submiteForm = async(data) =>{
    try{
      let res = await axios.post ('https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request',data);
      toast.success(res.data.message);
      navigate('/resrtepass')

    }
    catch(error){
      toast.error(error.response.data.message);
    }
   
  }
  return (<>
 
    <div className="auth-container">
        <div className="auth-layout  container-fluid">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-6  bg-white ">
              <div className="text-center p-5">
                <img src={logo} alt="foodApplogo" className=" py-3" />
                <h3>Forgot Your Password?</h3>
                <p>No worries! Please enter your email and we will send a password reset link </p>
                <form onSubmit={handleSubmit(submiteForm)}>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                    <i class="fa-regular fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your E-mail"
                      aria-label="Useremail"
                      aria-describedby="basic-addon1"
                      {...register('email',{
                        required:'Email Is Requered',
                        pattern:{
                          value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message:'Email Invaild'

                      }
                      })}
                    />
                    
                  </div>
                  {errors.email && <p className='alert alert-danger'>{errors.email.message}</p>}
              
                 
                  <button className=" my-3" >Submit </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
    
  )
}

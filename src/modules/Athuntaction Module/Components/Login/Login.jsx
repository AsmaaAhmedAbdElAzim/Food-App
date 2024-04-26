import React from "react";
import logo from "../../../../img/logo.png";
import style from "./Login.module.css";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Login({saveUserData}) {
  let navgate = useNavigate()
  let {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm()

  const onSubmit = async(data)=>{
    try{
      let respons = await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Login',data)
      toast.success('you are login correct')
      navgate('/dashboard')
      // console.log(respons.data.token);
      localStorage.setItem('token',respons.data.token)
      saveUserData()

    }
    catch (error){
      toast.error(error.response.data.message);
      
    }
   
  }

  return (
    <>
      <div className="auth-container">
        <div className="auth-layout  container-fluid">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-6  bg-white ">
              <div className="text-center p-3">
                <img src={logo} alt="foodApplogo" className="py-3" />
                <h3>Login</h3>
                <p>Welcome Back! Please enter your details</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your E-mail"
                      aria-label="Useremail"
                      aria-describedby="basic-addon1"
                      {...register('email' ,{
                        required:'Email Is Requered',
                        pattern:{
                            value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message:'Email Invaild'

                        }
                      }) 
                      
                      }
                    />
                  </div>
                  {errors.email && <p className="alert alert-danger">{errors.email.message}</p>}
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register('password',{
                        required:'Password Is Required',
                       
                      //  pattern:{
                      //   maxLength:'10',
                      //   minLength:'5',
                      //   message:'Invaild Password',
                      //  }
                      })}
                    />
                    {/* <i class={`fa-solid fa-eye-slash`}></i> //////////////////////////////////////////*/}
                  </div>
                  {errors.password && <p className="alert alert-danger">{errors.password.message}</p>}
                  <div className="d-flex justify-content-between my-3">
                    <a className={style.register} >Register Now?</a>
                    <a href="" className={style.forget}>Forgot Password?</a>
                  </div>
                  <button className=" my-3" >Login </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

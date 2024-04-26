import React from 'react'
import logo from "../../../../img/logo.png";
import style from './RestPassword.module.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function RestPassword() {
  let {
    register,
    handleSubmit,
    formState:{errors}

  }=useForm()

  const submitData =async(data)=>{
    try{
      let res = await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Reset',data);
      toast.success(res.data.message);
    }
    catch(error){
      toast.error(error.message);
    }
   
  }
  return (<>
   <div className="auth-container">
        <div className="auth-layout  container-fluid">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-6  bg-white ">
              <div className="text-center p-5">
                <img src={logo} alt="foodApplogo" className="py-3" />
                <h3> Reset  Password</h3>
                <p>Please Enter Your Otp  or Check Your Inbox</p>
                <form onSubmit={handleSubmit(submitData)}>
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
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="OTP"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register('seed',{
                        required:'OTP Is Requered',
                        maxLength: {
                          value: 4,
                          message: 'OTP must be max 4 characters',
                        },
                      })}
                    />
                   
                  </div>
                  {errors.seed && <p className='alert alert-danger'>{errors.seed.message}</p>}
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="New Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register('password',{
                        required:'Password Is Requered',
                        minLength:{
                          value:6,
                          message: 'Password must be min 6 characters',
                        },
                        maxLength:{
                          value:10,
                          message: 'Password must be max 10 characters',
                        }
                      })}
                    />
                    {/* <i class={`fa-solid fa-eye-slash`}></i> //////////////////////////////////////////*/}
                  </div>
                  {errors.password && <p className='alert alert-danger'>{errors.password.message}</p>}
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm New Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register('confirmPassword',{
                        required: 'Confirm Password is required',
                        // validate: (value) =>
                        //  { value === password.current ? '':'The passwords do not match'}
                      })}
                      
                    />
                    {/* <i class={`fa-solid fa-eye-slash`}></i> //////////////////////////////////////////*/}
                  </div>
                  {errors.confirmPassword && <p className='alert alert-danger'>{errors.confirmPassword.message}</p>}
                  
                  <button className=" my-3" >Reset  Password </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
    
  )
}

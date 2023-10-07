import React, { useState } from 'react'  //hook 
import './style.css'
import './index.css'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'


function AdminLogin() {

  return (
    <div className='AdminloginPage d-flex justify-content-center align-items-center vh-100 '>
        <div className='ad-login text-white p-3 rounded w-25'>

            <h2 style={{ fontFamily:"Courgette, cursive" }} className='h1 d-flex align-items-center justify-content-center mt-4 mb-4'>ADMIN LOGIN</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email'
                    //if any changing needed in input or any event occured than onchange fucntion runs at each key used to store values 
                    //  onChange={(e) => setEmail(e.target.value)} 
                    className='form-control border-rounded' autoComplete='on' />
                </div>

                <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password'
                  // onChange={(e) => setPassword(e.target.value)} 
                  className='form-control border-rounded' />
                </div>
                <Button href='./admindashboard' type='submit' style={{ background: 'linear-gradient(to right, rgba(53, 90, 160, 0.7), rgba(102, 204, 204, 0.7)' }} className='ad-login-btn btn btn-light border-rounded text-white w-100 mt-3'>
                Login </Button>
                <br /> <br />
                <input type="checkbox" className="custom-control custom-checkbox"  id="check"/> 
        <label htmlFor="check" className="custom-input-label mx-1">
        You are agree to our terms and policies
        </label>
            </form>
        </div>

    </div>
  )
}

export default AdminLogin
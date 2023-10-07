import React from 'react'


function SignUp() {
    return (
        <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 text-white mt-3">
<div className=" signup-form rounded mt-2 mb-2 p-5">
<form>
    <h3 style={{ fontFamily:"Courgette, cursive" }} className='h1 d-flex align-items-center justify-content-center'>Sign Up</h3>
    <div className="mb-2 ">
        <label htmlFor="FName">First Name</label>
        <input type="text" id="" placeholder="Enter First Name" className="form-control " />
    </div>
    <div className="mb-2">
        <label htmlFor="LName">Last Name</label>
        <input type="text" id="" placeholder="Enter Last Name" className="form-control" />
    </div>
    <div className="mb-2">
        <label htmlFor="email">Email</label>
        <input type="email" id="" placeholder="Enter Email" className="form-control" />
    </div>
    <div className="mb-2">
        <label htmlFor="password">Password</label>
        <input type="password" id="" placeholder="Enter password" className="form-control " />
    </div>
    
    <br />
    <div className="d-grid">
        <button style={{ background: 'linear-gradient(to right, rgba(53, 90, 160, 0.7), rgba(102, 204, 204, 0.7)' }} className="btn btn-light border-rounded text-white w-100 mt-3"> Sign Up</button>
    </div>
    <br />
    <p className="text-right" >
    Already Registered !<a className="mx-3" href="./userlogin"> Sign In</a>
</p>
</form>
</div>
        </div>
    )
  }

export default SignUp
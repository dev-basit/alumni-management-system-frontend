import React from "react"
import Button from 'react-bootstrap/Button';

function UserLogin() {
    return(
        <div className="u-login template d-flex justify-content-center align-items-center w-100 vh-100 text-white mt-3">
<div className=" u-form  rounded mt-2 mb-2  mx-2 me-3 p-5">
<form>
    <h3 style={{ fontFamily:"Courgette, cursive" }} className='h1 d-flex align-items-center justify-content-center'>Sign In</h3>
    <div className="mb-2">
        <label htmlFor="email">Email</label>
        <input type="email" id="" placeholder="Enter Email" className="form-control" />
    </div>
    <div className="mb-2">
        <label htmlFor="password">Password</label>
        <input type="password" id="" placeholder="Enter password" className="form-control" />
    </div>
    <div>
        <input type="checkbox" className="custom-control custom-checkbox"  id="check"/>
        <label htmlFor="check" className="custom-input-label">
            Remember Me
        </label>
    </div>
    <br />
    <div className="d-grid">
    <Button href='./HomePage' type='submit' style={{ background: 'linear-gradient(to right, rgba(53, 90, 160, 0.7), rgba(102, 204, 204, 0.7)' }} className='ad-login-btn btn btn-light border-rounded text-white w-100 mt-3'>
            Sign In</Button>
    </div>
    <br />
<p className="text-right" >
    Forgot <a href='' > Password? </a>  <br />
</p>
<p>New Member?<a className="mx-3" href="./signup"> Sign up</a></p>
</form>
</div>
        </div>
    )
}

export default UserLogin
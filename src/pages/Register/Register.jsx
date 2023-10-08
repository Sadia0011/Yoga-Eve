import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import {FcGoogle} from 'react-icons/fc'
const Register = () => {
  const [showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
    const {createUser,googleSignIn}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        if(!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:<>?]).{6,}/.test(password)){
          toast("Please provide a stronger password")    
          return;
        }

// sign in user
createUser(email,password)
.then(result=>{
  console.log(result.user)
toast("Congratulations,registration successful")
navigate("/")
})
        .catch(error=>console.error(error))

    }
    const handleGoogleSignIn=()=>{
      googleSignIn()
      .then(result=>{
        console.log(result.user)
       toast("Successfully logged in")
       navigate("/")
      })
        .catch(error=>{
          console.error(error)
        toast.error("email or password don't match.please try again")
        })
    }
    return (
        <div>
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-pink-600">Register now!</h1>
               </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div  className="card-body">
              <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name<sup className="text-pink-600">*</sup></span>
                </label>
                <input type="name" name="name"  placeholder="name" className="border-pink-600 input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email<sup className="text-pink-600">*</sup></span>
                </label>
                <input type="email" name="email"  placeholder="email" className="border-pink-600 input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password<sup className="text-pink-600">*</sup></span>
                </label>
                <input 
                type={showPassword ? "text":"password" } 
                name="password"  
                placeholder="password" 
                className="border-pink-600 input input-bordered relative" 
                required />
                <span className="absolute bottom-52 right-12"><button onClick={()=>setShowPassword(!showPassword)} >

                  {showPassword ? <AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}
                </button></span>
               </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
              </form>
            </div>
            <button onClick={handleGoogleSignIn} className=" text-pink-600 font-semibold flex justify-center items-center gap-2">Login with Google <span className="text-2xl"><FcGoogle></FcGoogle></span></button>
        <p className="p-3 text-center">Already have an account? Please<Link to="/login"><button className="btn btn-link text-pink-600">login</button></Link></p>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Register;
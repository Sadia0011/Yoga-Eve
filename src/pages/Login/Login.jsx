import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link,  useLocation,  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
const {signIn,googleSignIn}=useContext(AuthContext)
const [showPassword,setShowPassword]=useState(false)
const navigate=useNavigate()
const location=useLocation()
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

// sign in user
signIn(email,password)
.then(result=>{
  console.log(result.user)
 toast("Successfully logged in")
 navigate(location?.state ? location.state : "/")
})
        .catch(error=>{
          console.error(error)
        toast.error("email or password don't match.please try again")
        })
         

    }
    // google sign in
    const handleGoogleSignIn=()=>{
      googleSignIn()
      .then(result=>{
        console.log(result)
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
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-pink-600">Login now!</h1>
               </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div  className="card-body">
             <form onSubmit={handleLogin}>
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
                <input type={showPassword ? "text":"password" }   
                name="password"  
                placeholder="password" 
                className="border-pink-600 input input-bordered" 
                required />
                <span className="absolute bottom-52 right-12"><button onClick={()=>setShowPassword(!showPassword)} >

{showPassword ? <AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}
</button></span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Login</button>
              </div>
             </form>
            </div>
            <button onClick={handleGoogleSignIn} className=" text-pink-600 font-semibold flex justify-center items-center gap-2">Login with Google <span className="text-2xl"><FcGoogle></FcGoogle></span></button>
   
        <p className="p-3 text-center">New here? Please<Link to="/register"><button className="btn btn-link text-pink-600">Register</button></Link></p>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Login;
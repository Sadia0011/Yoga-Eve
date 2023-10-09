import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'


const Register = () => {
  const [showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
    const {createUser}=useContext(AuthContext)
    const handleLogin=async(e)=>{
        e.preventDefault();
        const displayName=e.target.name.value;
        const photoURL=e.target.img.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
     
const profile={
  displayName: displayName,
      photoURL: photoURL,
}

console.log(profile,email,password)
        if(!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:<>?]).{6,}/.test(password)){
          toast("Please provide a stronger password")    
          return;
        }
        
// sign in user
 
    const result= await createUser(profile, email,password)
       .then(async (result) => {console.log(result)})
        .catch((error) => console.log("error from signup", error));
        toast("Congratulations,registration successful")
        navigate("/")
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
                  <span className="label-text">Image</span>
                </label>
                <input type="photoURL" name="img"  placeholder="Image" className="border-pink-600 input input-bordered"  />
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
                <span className="absolute bottom-44 right-12"><button onClick={()=>setShowPassword(!showPassword)} >

                  {showPassword ? <AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}
                </button></span>
               </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
              </form>
            </div>
            <p className="p-3 text-center">Already have an account? Please<Link to="/login"><button className="btn btn-link text-pink-600">login</button></Link></p>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Register;
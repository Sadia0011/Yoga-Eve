import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {CgProfile} from 'react-icons/cg'
import {GiFlowerTwirl} from 'react-icons/gi'
const Navbar = () => {
  const {user,logOut,loading}=useContext(AuthContext)
  // console.log(user.displayName || " helllo")
  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  const handleLogOut=()=>{
    logOut();
  }
    const navLinks=<>
    <li id="sidebar"><NavLink  to="/">Home</NavLink></li>
    <li id="sidebar"><NavLink  to="/about">About</NavLink></li>
    <li id="sidebar"><NavLink  to="/contact">Contact</NavLink></li>
    {user && <li id="sidebar"><NavLink  to="/gallary">Gallary</NavLink></li>}
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <div className="flex  items-center justify-center">
  <span className="text-pink-600 text-4xl mr-2"><GiFlowerTwirl></GiFlowerTwirl></span>
  <h2 className="text-center my-3 normal-case text-xl"> Yoga <span className="bg-pink-600 text-white p-1 rounded">EVE</span></h2>
  
    </div> 
       </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
         { user ?
         <><span>{user.displayName ? <h2>{user.displayName}</h2> :"unKnown" }</span>
         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div >
       <span> {user.photoURL ? <img className="w-10 rounded-full" src={user.photoURL}/> :<CgProfile className="text-4xl"></CgProfile>}</span>
        </div>
      </label>
      <button onClick={handleLogOut} className="btn btn-small bg-pink-600 text-white">Sign Out</button></> :
         <Link to="/login"><button className="btn btn-small bg-pink-600 text-white">Login</button></Link>
}
       
        </div>
      </div>
    );
};

export default Navbar;
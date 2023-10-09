import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const UserProfile = () => {
    const {user}=useContext(AuthContext)
    return (
      <div className="flex flex-col justify-center items-center">
          <div>
     {user.photoURL ? <>
       <div className="avatar">
       <img className="w-10 rounded-full" src={user.photoURL}/>
       </div>
       </> :<CgProfile className="text-4xl"></CgProfile>}
        </div>

        <div >
            <h2 className="text-3xl mt-5"><span className="font-semibold">Name:</span> {user.displayName}</h2>
            <h2 className="text-3xl my-5"><span className="font-semibold">email</span>: {user.email}</h2>
        </div>
      </div>
        
    );
};

export default UserProfile;
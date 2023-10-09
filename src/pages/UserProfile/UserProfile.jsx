import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import{CgProfile} from 'react-icons/cg'

const UserProfile = () => {
    const {user}=useContext(AuthContext)
    return (
      <div className="flex flex-col justify-center items-center">
       
    
     
       <div className="avatar">
       <div className="w-64 h-64 rounded-full">
       {user?.photoURL ?
       <img  src={user.photoURL }/>:
       <CgProfile className="text-[256px]"></CgProfile>
      }
       </div>
        </div>
     
      

        <div >
            <h2 className="text-3xl mt-5"><span className="font-semibold">Name:</span> {user?.displayName ? user.displayName : " no Name provided"}</h2>
            <h2 className="text-3xl my-5"><span className="font-semibold">email</span>: {user.email}</h2>
        </div>
      </div>
        
    );
};

export default UserProfile;
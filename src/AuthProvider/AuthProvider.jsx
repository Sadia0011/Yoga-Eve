import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext= new createContext(null)

const AuthProvider = ({children}) => {
// eslint-disable-next-line no-unused-vars
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const googleProvider=new GoogleAuthProvider();
const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
}
const createUser=async(profile,email,password)=>{
    setLoading(true)
    await createUserWithEmailAndPassword (auth,email,password);
    await updateProfile(auth.currentUser,profile)
       .then((result)=>{console.log("profile updated",result)})
       .catch(error=>console.error(error))
       const username = auth.currentUser;
       setUser({ ...username });
       return username;
}
const signIn=(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
  
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}
// const profileUpdate=async(name)=>{
//       updateProfile(auth.currentUser,{displayName:name})
//     // setLoading(true)
    
//     .then((result)=>{console.log("profile updated",result.user)})
//     .catch(error=>console.error(error))
//     const username = auth.currentUser;
//     setUser({ ...username });
//     return ;
// }

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>unSubscribe;
},[])

const AuthInfo={
    user,
    createUser,
    signIn,
    googleSignIn,
    // profileUpdate,
    loading,
    logOut
}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children:PropTypes.node
}
export default AuthProvider;
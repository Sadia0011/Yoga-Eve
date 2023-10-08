import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword (auth,email,password);
}
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}


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
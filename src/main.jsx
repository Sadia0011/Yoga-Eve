import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ExpertDetails from './pages/Home/Expert/ExpertDetails';
import ServiceDetails from './pages/Services/ServiceDetails';
import BlogDetails from './pages/Home/Blog/BlogDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Gallary from './pages/Gallary/Gallary';
import UserProfile from './pages/UserProfile/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("/services.json")
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/gallary",
        element:<PrivateRoute><Gallary></Gallary></PrivateRoute>
      },
      {
        path:"/profile",
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path:"/experts/:id",
        element:<PrivateRoute><ExpertDetails></ExpertDetails></PrivateRoute>,
        loader:()=>fetch('/Experts.json')
      },
      {
        path:"/service/:id",
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:()=>fetch('/services.json')
      },
      {
        path:"/blog/:id",
        element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader:()=>fetch('/blogs.json')
      },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)

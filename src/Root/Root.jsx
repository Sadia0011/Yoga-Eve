import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div className="font-font_Cormorant">
         <div className="max-w-6xl mx-auto ">
         <Navbar></Navbar>
            <Outlet></Outlet>
            </div>   
            <Footer></Footer>
        </div>
    );
};

export default Root;
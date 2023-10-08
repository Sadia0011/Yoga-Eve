import Banner from "./Banner";

import { BsFlower1 } from 'react-icons/bs';
// import SpecialOffer from "./SpecialOffer";
// import Healing from "./Healing";
import Services from "../Services/Services";
import { useLoaderData } from "react-router-dom";
import Experts from "./Expert/Experts";
import { useEffect, useState } from "react";
import Blogs from "./Blog/Blogs";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";


const Home = () => {
  const [experts,setExperts]=useState([])
  const [blogs,setBlogs]=useState([])
  const services=useLoaderData();

  useEffect(()=>{
    fetch('/Experts.json')
    .then(res=>res.json())
    .then(data=>setExperts(data))
  },[])
  useEffect(()=>{
    fetch('/blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
    return (
        <div>
            <Banner></Banner>

            <div className="text-center my-8">
                <h2 className="text-lg">WELCOME</h2>
                <h2 className="text-4xl my-4 font-extrabold"><span className="text-pink-600">Naturally</span> Effective <span className="text-pink-600">Health</span> Solutions</h2>
                <h2 className="text-xl">Welcome to visit our center where every woman is treated with high attention.</h2>
            
            <div className="text-4xl my-5 flex items-center justify-center">
              <h2 className="5xl text-pink-600">..........</h2> 
              <span > <BsFlower1></BsFlower1></span> 
              <h2 className="5xl text-pink-600">..........</h2> 
            </div>
            </div>
            {/* <SpecialOffer></SpecialOffer>

            <div className="text-4xl my-5 flex items-center justify-center">
              <h2 className="5xl">..........</h2> 
              <span> <BsFlower1></BsFlower1></span> 
              <h2 className="5xl">..........</h2> 
            </div>
            <Healing></Healing> */}

{/* <div className="text-4xl my-5 flex items-center justify-center">
              <h2 className="5xl">..........</h2> 
              <span> <BsFlower1></BsFlower1></span> 
              <h2 className="5xl">..........</h2> 
            </div> */}
            <div className="text-center my-8">
                <h2 className="text-4xl font-semibold">Our <span className="text-pink-600">Services</span></h2>
                </div>
            <Services services={services}></Services>

            <div className="text-4xl my-5 flex items-center justify-center">
              <h2 className="5xl text-pink-600">..........</h2> 
              <span > <BsFlower1></BsFlower1></span> 
              <h2 className="5xl text-pink-600">..........</h2> 
            </div>
            <div className="text-center my-8">
                <h2 className="text-4xl font-semibold">Our <span className="text-pink-600">Experts</span> </h2>
                </div>
            <Experts experts={experts}></Experts>
            <Blogs blogs={blogs}></Blogs>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;
import { Link } from "react-router-dom";
import { BsFlower1 } from 'react-icons/bs';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const WhyChooseUs = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    return (
      <div className="mb-5">
           <div className="text-4xl my-5 flex items-center justify-center">
              <h2 className="5xl text-pink-600">..........</h2> 
              <span > <BsFlower1></BsFlower1></span> 
              <h2 className="5xl text-pink-600">..........</h2> 
            </div>
            <div className="text-center my-8">
            <h2 className="text-4xl font-semibold mb-3">Why <span className="text-pink-600">Choose Us</span></h2>
                </div>
     

 <div className="flex flex-col lg:flex-row justify-between gap-5">
 <div className="lg:w-1/2" data-aos="fade-down" >
 <img  className="w-full h-full"
  src="https://i.ibb.co/tq0zz7Y/images-q-tbn-ANd9-Gc-Tqgphdj-NKII4-Jh-Slk-j-EVJ5-E51-P2-FIBvr-Fzg-usqp-CAU.jpg" alt="" />

 </div>
<div data-aos="fade-up" className="text-left p-8 text-xl bg-pink-300 lg:w-1/2">

  <ul className="mb-5">
    <li><span className="font-bold ">Expertise:</span> Our team comprises certified and experienced professionals who are passionate about what they do. Your well-being is our priority.</li>
    <li><span className="font-bold">Diversity:</span> We believe in the power of diversity, and our services reflect that. Choose from a variety of yoga styles and holistic therapies to suit your preferences.</li>
    <li><span className="font-bold">Community:</span> This is more than just a platform; it is a community. Connect with like-minded individuals, share your experiences, and grow together on your wellness journey.</li>
    </ul>
    <div className=" flex gap-3">
    <p >Want Free Consultation,Please</p> <span><Link to="/login"><button className=" btn-link text-pink-600 font-bold">login</button></Link></span>

    </div>
    </div>
</div>
 </div>

    );
};

export default WhyChooseUs;
import PropTypes from 'prop-types';
import Expert from './Expert';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Experts = ({experts}) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    return (
        <div 
        data-aos="zoom-in" 
        className="hero overflow-hidden " 
        style={{backgroundImage: 'url(https://i.ibb.co/RCTk02R/images-q-tbn-ANd9-Gc-QIeh-X21-GRj-JZSex-W587-ZWKLMrm-WFtx-d3og-A-usqp-CAU.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content">
          <div className="w-3/4 mx-auto mt-5">
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-20'>
         

            {
                experts.map(expert=><Link to={`/experts/${expert.id}`} key={expert.id}><Expert  expert={expert}></Expert></Link>)
            }
          </div>
        </div>
      </div>
      </div>
    );
};
Experts.propTypes ={
    experts:PropTypes.array
}
export default Experts;
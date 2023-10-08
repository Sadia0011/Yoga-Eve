import PropTypes from 'prop-types';
import ServiceCard from "./ServiceCard";
import { useState } from 'react';

const Services = ({services}) => {
    // console.log(services);
    const[showAll,setShowAll]=useState(false)
    return (
       <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                services.slice(0, showAll ? services.length : 4).map(service=><ServiceCard
                     key={service.key}service={service}></ServiceCard>)
            }
        </div>
       <div className={showAll && 'hidden'} >
      <div className='flex justify-center my-5'>
      <button onClick={()=>setShowAll(true)} className='btn btn-sm text-white bg-pink-600'>Show All</button>
      </div>
       </div>
       </div>
    );
};
Services.propTypes ={
    services:PropTypes.array
}
export default Services;
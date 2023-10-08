
import PropTypes from 'prop-types';
import{AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const {id,name,img,price,description}=service;
    return (
        <div>
            <div className="relative flex flex-col h-[400px]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className='relative'>
    <img className="w-full h-[150px] " src={img} alt={name}/>
    <h4 className=" absolute top-28 bg-pink-600 text-white p-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     TK {price}k
    </h4>
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {name}
    </h4>
   
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
     {description.split(' ').slice(0,7).join(' ')} <span >
        
     </span>
    </p>
    <div className='flex items-center'>
        <Link to={`/service/${id}`} className='text-pink-600'>Learn more</Link>
        <AiOutlineArrowRight className=' text-xl text-pink-600'></AiOutlineArrowRight>
        </div>
  </div>
  
</div>
        </div>
    );
};
ServiceCard.propTypes ={
    service:PropTypes.object
}
export default ServiceCard;
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const ServiceDetails=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id)
//    console.log(allData)
   const selectedService=ServiceDetails.find(data=>data.id== idInt)
    console.log(selectedService)

    const navigate=useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }

    return (
        <div>
         <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={selectedService.img} className="w-full h-80" alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block text-pink-600 font-sans text-2xl font-semibold">{selectedService.name}</h4>
    <p className="block font-medium">TK {selectedService.price}K </p>
    <p className="block font-medium">{selectedService.description}</p>
  </div>
 
</div>
<div className="flex justify-center items-center">
<button onClick={handleGoBack} className="btn btn-secondary my-5">Go Back</button>
</div>
       </div>
    );
};

export default ServiceDetails;
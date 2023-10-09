import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const ServiceDetails=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id)

   const selectedService=ServiceDetails.find(data=>data.id== idInt)
    console.log(selectedService)

    const navigate=useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }

    return (
        <div>
         <div className="relative flex  flex-col rounded-xl bg-white ">
  <div className="relative">
    <img src={selectedService.img} className="w-1/2 mx-auto" alt="profile-picture" />
  </div>
  <div className="p-6 text-center max-w-3xl mx-auto">
    <h4 className="mb-2 block text-pink-600  text-3xl font-semibold">{selectedService.name}</h4>
    <p className="block text-2xl font-medium">TK {selectedService.price}</p>
    <p className="block text-2xl font-medium">{selectedService.description}</p>
  </div>
 
</div>
<div className="flex justify-center items-center">
<button onClick={handleGoBack} className="btn btn-secondary text-white my-5">Go Back</button>
</div>
       </div>
    );
};

export default ServiceDetails;
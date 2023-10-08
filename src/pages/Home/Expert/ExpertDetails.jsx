import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const ExpertDetails = () => {
    const details=useLoaderData();
    const {id}=useParams()
    const idInt=parseInt(id)
//    console.log(allData)
   const selectedExpert=details.find(data=>data.id== idInt)
    console.log(selectedExpert)

    const navigate=useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
       <div>
         <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={selectedExpert.pic} className="w-full h-80" alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block text-pink-600 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {selectedExpert.name}
    </h4>
    <p className="block font-medium">
      {selectedExpert.post}
    </p>
    <p className="block font-medium">
      {selectedExpert.degree}
    </p>
    <p className="block font-medium">
      {selectedExpert.specialty}
    </p>
  </div>
 
</div>
<div className="flex justify-center items-center">
<button onClick={handleGoBack} className="btn btn-secondary my-5">Go Back</button>
</div>
       </div>
    );
};

export default ExpertDetails;


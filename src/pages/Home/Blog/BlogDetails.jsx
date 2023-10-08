import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const BlogDetails = () => {
    const blogDetails=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id)
//    console.log(allData)
   const blog_post=blogDetails.find(data=>data.id== idInt)
    console.log(blog_post)

    const navigate=useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }

    return (
        <div className="mt-8">
            <div className="flex items-center gap-5">
            <div className="avatar">
            <div className='w-20 h-20 rounded-full'>
            <img  src={blog_post.author_img} alt="profile-picture" />
            </div>
        </div>
            <div>
            <p className="block font-medium">{blog_post.date}</p>
            <h4 className="mb-2 block text-pink-600 font-sans text-2xl font-semibold">{blog_post.name}</h4>
            </div>
             
            </div>
        <div className="relative flex  flex-col rounded-xl bg-white ">
      <div className="relative mx-4 mt-4 h-80 ">
   <img src={blog_post.img} className="w-1/2 mx-auto h-80" alt="profile-picture" />
 </div>
 <div className="p-6 text-center">
  
   <p className="block font-medium text-left">{blog_post.post_description}</p>
 
 
 </div>

</div>
<div className="flex justify-center items-center">
<button onClick={handleGoBack} className="btn btn-secondary my-5">Go Back</button>
</div>
      </div>
    );
};

export default BlogDetails;
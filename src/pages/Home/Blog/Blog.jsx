import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import{AiOutlineArrowRight} from 'react-icons/ai'
const Blog = ({blog}) => {
    const{id,name,author_img,img,post_description,date}=blog;
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

    <img src={img} className='w-full h-[200px]' alt={name}/>

  <div className="p-6">
    <h4 className="block font-sans text-xl font-semibold">{name}</h4>
    <p className="mt-3 block font-sans text-base"> {post_description.split(" ").slice(0,20).join(" ")}</p>
    <div className='flex items-center'>
        <Link to={`/blog/${id}`} className='text-pink-600'>Read more</Link>
        <AiOutlineArrowRight className=' text-xl text-pink-600'></AiOutlineArrowRight>
        </div>
  </div>
  <div className="flex items-center justify-between p-6">
    <div className="flex items-center -space-x-3">
      <img
        alt="blog"
        src={author_img}
        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-1"
      />
      
    </div>
    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
      {date}
    </p>
  </div>
</div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object
}
export default Blog;
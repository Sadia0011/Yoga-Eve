import PropTypes from 'prop-types';

import { BsFlower1 } from 'react-icons/bs';
import Blog from './Blog';
import { useState } from 'react';
const Blogs = ({blogs}) => {
    const[showAll,setShowAll]=useState(false)
   
    return (
        <div>
             <div className="text-4xl my-5 flex items-center justify-center">
              <h2 className="5xl text-pink-600">..........</h2> 
              <span > <BsFlower1></BsFlower1></span> 
              <h2 className="5xl text-pink-600">..........</h2> 
            </div>
            <div className="text-center my-8">
                <h2 className="text-4xl font-semibold">Latest <span className='text-pink-600'>Blog</span> Post</h2>
                </div>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
               {
                    blogs.slice(0, showAll ? blogs.length : 4).map(blog=><Blog key={blog.id} blog={blog}></Blog>)
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
Blogs.propTypes ={
    blogs:PropTypes.array
}
export default Blogs;
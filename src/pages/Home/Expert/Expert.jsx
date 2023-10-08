import PropTypes from 'prop-types';

const Expert = ({expert}) => {
    const{name,pic,post}=expert;
    return (
        <div className='flex flex-col items-center'>
        <div className="avatar">
            <div className=' rounded-full'>
            <img  src={pic} alt="profile-picture" />
            </div>
      
        </div>
        <div className="text-center text-white">
          <h4 className="mb-2  font-sans text-lg font-semibold ">{name}</h4>
          <p className=" ">{post}</p>
        </div>
        
      </div>
    );
};
Expert.propTypes ={
    expert:PropTypes.object
}
export default Expert;
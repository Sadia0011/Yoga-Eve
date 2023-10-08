import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" min-h-screen container mx-auto my-10 flex flex-col justify-center items-center">
           <h2 className="text-3xl my-3">This Page has no content</h2>
           <h2 className="text-xl">Our member seems to have misplaced the page you requested. Stay with us, and we will help you rediscover it.</h2>
       <h2 className="text-3xl my-3">Here, instead, you will find some useful links: </h2>
       <Link to="/"><button className="btn btn-secondary">Home</button></Link>
        </div>
    );
};

export default ErrorPage;
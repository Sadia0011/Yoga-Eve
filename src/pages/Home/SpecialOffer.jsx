

const SpecialOffer = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className=" w-full hero-overlay opacity-70" 
            style={{backgroundImage:
            "url(https://i.ibb.co/Tv4WFjQ/images-q-tbn-ANd9-Gc-Rb-Lrv6z49t-YWMLi-RM-98-Zyj-TIm-Xqv-FDlsqxg-usqp-CAU.jpg)", 
            backgroundRepeat:"initial"}}>
               
               <div className="flex justify-around items-center">
                <div>
                <h2 className="uppercase text-4xl font-bold text-black">Special Offer</h2>
                </div>
                <div className="flex items-center">
                    <h2 className="text-6xl">50%</h2>
                    <h2 className="text-lg"> off</h2>
                </div>
               </div>
               
                </div>
        </div>
    );
};

export default SpecialOffer;
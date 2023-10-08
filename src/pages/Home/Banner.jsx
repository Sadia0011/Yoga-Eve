

const Banner = () => {
    return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ZxynwCk/images-q-tbn-ANd9-Gc-Tz-Jd-XWm-NJ8un8-Te0i-SLb3-Lw-Ce-DATCflvq-ZAg-usqp-CAU.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Join Our Exotic Retreats</h1>
      <p className="mb-5">Discover Inner Peace and Balance Through Yoga</p>
      <button className="btn btn-primary bg-pink-600 text-white border-none">Learn More</button>
    </div>
  </div>
</div>
  
    );
};

export default Banner;


const Hero = () => {

  

  return (
      <div className="p-2">
      <div className="hero w-[100%] mx-auto rounded-xl  md:rounded-3xl container  md:min-h-screen"
style={{
  backgroundImage: "url(https://i.ibb.co.com/Nxhg7Kx/hero.png)",
}}>
<div className=" bg-opacity-60"></div>
<div className="hero-content text-neutral-content text-center">
  <div className="text-center w-full md:w-1/2 space-y-5">
    <h1 className="mb-5 text-xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
    <p className="mb-5">
    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
    </p>
    <button className="btn rounded-full bg-[#0BE58A] border-none outline-none">Explore Now</button>
    <button className="btn bg-transparent  text-white font-bold ml-2 hover:text-black rounded-full">Our Feedback</button>
  </div>
</div>
</div>
</div>
  );
};

export default Hero;
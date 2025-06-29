import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full min-h-[100vh] relative">
      <div className="w-full h-full absolute">
        <video
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          loop
          muted
        >
          <source
            src="https://ik.imagekit.io/akiAfnan/Odyssey/banner.mp4?updatedAt=1746975530237"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="pl-[10%] absolute w-full h-full flex items-center text-white">
        <div className="flex flex-col gap-8 items-start">
          <div data-aos='fade-right' className="flex flex-col gap-2 uppercase">
            <h4 className="text-xl translate-x-1">Alchemy</h4>
            <h3 className="text-6xl md:text-8xl font-black font-os">Odyssey</h3>
          </div>
          <div data-aos='fade-right' className="translate-x-2 flex gap-6 items-center">
            <span className="h-[80px] sm:h-[50px] w-[5px] bg-white"></span>
            <p className="w-full sm:w-[400px] md:text-base text-sm pr-8">
              Indulge in luxury, breathtaking views, and unforgettable
              experiences. Book your perfect getaway with our exclusive resort
              packages!
            </p>
          </div>
          <button data-aos='fade-right' className="py-3 px-6 border rounded-lg border-white">
            <Link to={"/resorts"}>Explore</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

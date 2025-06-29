import ResortIndex from "./ResortIndex";
import CountryIndex from "./CountryIndex";
import Activities from "./Activities";
import { Link } from "react-router-dom";
import Partners from "./Partners";
import { Parallax } from "react-scroll-parallax";
import maldives from "../assets/maldives.png";
import dominican from "../assets/dominican.png";
import indonesia from "../assets/indonesia.png";
import usp from "../data/usp";

const IndexRest = () => {
  return (
    <section className="w-full py-12 flex flex-col gap-12 bg-[#f8f8f8]">
      <div className="flex gap-8 lg:flex-row sm:px-10 px-4 flex-col">
        <div className="basis-[50%] flex items-center justify-center w-full">
          <div className="flex flex-col gap-4 sm:w-[350px]">
            <h3 data-aos='fade-right' className="font-os text-2xl">
              Luxury Escapes Like Never Before
            </h3>
            <p data-aos='fade-right'>
              Discover luxury resorts with stunning views, world-class
              amenities, exquisite dining, and unforgettable relaxation or
              adventure.
            </p>
            <div data-aos='fade-right' className="flex items-center gap-6">
              {usp.map((u) => (
                <div className="flex flex-col gap-2 items-center">
                  <img src={u?.src} className="w-[30px] h-[30px]" alt="" />
                  <h4 className="text-sm text-center">
                    {u?.metric}+{" "}
                    <span className="text-[rgba(0,0,0,0.5)]">{u?.name}</span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div data-aos='fade-left' className="basis-[50%] flex items-center justify-center relative gap-4 min-h-[550px]">
          <div className="w-[300px] h-[385px] bg-white rounded-xl overflow-hidden translate-y-20 rotate-6 -translate-x-[60%] shadowed absolute">
            <video
              className="w-full h-[300px] rounded-t-lg object-cover"
              playsInline
              autoPlay
              loop
              muted
            >
              <source
                src="https://ik.imagekit.io/akiAfnan/Odyssey/8045174-sd_540_960_25fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="flex items-center gap-4 p-4">
              <img src={maldives} className="w-[50px] h-[50px]" alt="" />
              <div className="flex flex-col">
                <h4 className="font-os">Constance Mofushi</h4>
                <p>Maldives</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[385px] bg-white rounded-xl shadowed absolute overflow-hidden">
            <video
              className="w-full h-[300px] rounded-t-lg object-cover"
              playsInline
              autoPlay
              loop
              muted
            >
              <source
                src="https://ik.imagekit.io/akiAfnan/Odyssey/13860671_960_540_30fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="flex items-center gap-4 p-4">
              <img src={indonesia} className="w-[50px] h-[50px]" alt="" />
              <div className="flex flex-col">
                <h4 className="font-os">The St Regis</h4>
                <p>Indonesia</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[385px] bg-white rounded-xl -rotate-6 -translate-y-20 translate-x-[60%] shadowed absolute overflow-hidden">
            <video
              className="w-full h-[300px] rounded-t-lg object-cover"
              playsInline
              autoPlay
              loop
              muted
            >
              <source
                src="https://ik.imagekit.io/akiAfnan/Odyssey/13263226_540_960_50fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="flex items-center gap-4 p-4">
              <img src={dominican} className="w-[50px] h-[50px]" alt="" />
              <div className="flex flex-col">
                <h4 className="font-os">Casa De Campo</h4>
                <p>Dominican Republic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 bg-[#1a1a1a] text-white py-12 px-4 sm:px-10">
        <div className="flex flex-col items-center">
          <h4 data-aos="fade-up">who we are</h4>
          <h3 data-aos="fade-up" className="text-5xl">
            About Us
          </h3>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="w-full h-[250px] sm:h-[400px] md:h-[800px] overflow-hidden">
            <Parallax className="w-full h-full" scale={[0.5, 1.0]}>
              <img
                data-aos="fade-up"
                src="https://ik.imagekit.io/akiAfnan/Odyssey/about.jpg?tr=w-1400,h-1080,f-auto,q-auto,fo-auto"
                className="w-full rounded-2xl h-full object-cover"
                alt=""
              />
            </Parallax>
          </div>
          <p
            data-aos="fade-up"
            className="text-center w-full sm:w-[400px] px-4"
          >
            We provide exclusive resort packages for luxurious getaways,
            ensuring unforgettable experiences in the world's most stunning
            destinations.
          </p>
          <button data-aos="fade-up" className="button">
            <Link to={"/about"}>Know More</Link>
          </button>
        </div>
      </div>
      <ResortIndex />
      <CountryIndex />
      <Activities />
      <Partners />
    </section>
  );
};

export default IndexRest;

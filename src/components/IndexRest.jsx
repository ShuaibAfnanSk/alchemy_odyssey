import ResortIndex from "./ResortIndex";
import CountryIndex from "./CountryIndex";
import Activities from "./Activities";
import { Link } from "react-router-dom";
import Partners from "./Partners";
import { Parallax } from "react-scroll-parallax";
import Marquee from "./Marquee";

const IndexRest = () => {

    return (
        <section className="w-full pt-16 flex flex-col gap-16 bg-[#f8f8f8]">
            <div className="flex flex-col relative h-[500px] md:h-fit md:flex-row justify-between">
                <div data-aos='fade-right' className="w-[90%] h-full absolute md:relative md:w-[450px] md:h-[550px] overflow-hidden">
                    <img src="https://ik.imagekit.io/akiAfnan/Odyssey/about-index.jpg?updatedAt=1746975528585" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex basis-[50%] box absolute p-4 md:relative items-end md:items-center justify-start md:justify-center">
                    <div data-aos='fade-up' className="flex bg-[#f8f8f8] p-4 md:relative md:p-0 w-[90%] md:w-fit h-fit md:bg-none flex-col gap-6">
                        <p data-aos='fade-up' className="text-sm w-full lg:text-base md:w-[350px] lg:w-[450px]">Discover our finest resorts, each offering luxury, comfort, and stunning views. Whether a serene beach, cozy mountain, or tropical paradise, experience world-class amenities, exquisite dining, and rejuvenating activities. Perfect for romantic getaways or family vacations, our top destinations promise unparalleled relaxation and adventure.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 bg-[#1a1a1a] text-white py-16 px-4 sm:px-10">
                <div className="flex flex-col items-center">
                    <h4 data-aos='fade-up'>who we are</h4>
                    <h3 data-aos='fade-up' className="text-5xl">About Us</h3>
                </div>
                <div className="flex flex-col gap-10 items-center">
                    <div className="w-full h-[250px] sm:h-[400px] md:h-[800px] overflow-hidden">
                        <Parallax className="w-full h-full" scale={[0.5, 1.0]}>
                            <img data-aos='fade-up' src="https://ik.imagekit.io/akiAfnan/Odyssey/about.jpg?updatedAt=1746975528588" className="w-full rounded-2xl h-full object-cover" alt="" />
                        </Parallax>
                    </div>
                    <p data-aos='fade-up' className="text-center w-full sm:w-[400px] px-4">We provide exclusive resort packages for luxurious getaways, ensuring unforgettable experiences in the world's most stunning destinations.</p>
                    <button data-aos='fade-up' className="button"><Link to={"/about"}>Know More</Link></button>
                </div>
            </div>
            <ResortIndex />
            <CountryIndex />
            <Activities />
            <Partners />
            <Marquee />
        </section>
    );
}

export default IndexRest;
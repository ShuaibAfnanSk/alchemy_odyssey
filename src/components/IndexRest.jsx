import { ParallaxBanner } from "react-scroll-parallax";
import explore from "../assets/explore.jpg";
import ResortIndex from "./ResortIndex";
import CountryIndex from "./CountryIndex";
import Activities from "./Activities";
import Subscribe from "./Subscribe";

const IndexRest = () => {
    return (
        <section className="w-full py-16 flex flex-col gap-16 bg-[#f8f8f8]">
            <div className="flex flex-col relative h-[500px] md:h-fit md:flex-row justify-between">
                <div className="w-[90%] h-full absolute md:relative md:w-[450px] md:h-[550px] overflow-hidden">
                    <ParallaxBanner className="w-full h-full object-cover clippath-br" layers={[{ image: explore }]} />
                </div>
                <div className="flex basis-[50%] box absolute p-4 md:relative items-end md:items-center justify-start md:justify-center">
                    <div className="flex bg-[#f8f8f8] p-4 md:relative md:p-0 w-[90%] md:w-fit h-fit clippath-br md:bg-none flex-col gap-6">
                        <h3 className="text-3xl md:text-4xl uppercase font-os">Alchemy Odyssey</h3>
                        <p className="text-sm w-full lg:text-base md:w-[350px] lg:w-[450px]">Discover our finest resorts, each offering luxury, comfort, and stunning views. Whether a serene beach, cozy mountain, or tropical paradise, experience world-class amenities, exquisite dining, and rejuvenating activities. Perfect for romantic getaways or family vacations, our top destinations promise unparalleled relaxation and adventure.</p>
                    </div>
                </div>
            </div>
            <CountryIndex />
            <ResortIndex />
            <div className="flex flex-col gap-12">
                <div className="flex flex-col items-center">
                    <h4>who we are</h4>
                    <h3 className="text-5xl">About Us</h3>
                </div>
                <div className="flex flex-col relative h-[500px] md:h-fit gap-5 md:flex-row-reverse justify-between">
                    <div className="w-[90%] h-full absolute md:relative md:w-[450px] right-0 md:h-[550px] overflow-hidden">
                        <ParallaxBanner className="w-full h-full object-cover clippath-bl" layers={[{ image: explore }]} />
                    </div>
                    <div className="flex basis-[50%] box absolute right-0 p-4 md:relative items-end md:items-center justify-end md:justify-center">
                        <div className="flex bg-[#f8f8f8] p-4 md:relative clipbox md:p-0 w-[90%] md:w-fit h-fit md:bg-none flex-col gap-6">
                            <p className="w-full md:w-[350px]">We provide exclusive resort packages for luxurious getaways, ensuring unforgettable experiences in the world's most stunning destinations.</p>
                            <button className="button self-end md:self-auto">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Activities />
            <Subscribe />
        </section>
    );
}

export default IndexRest;
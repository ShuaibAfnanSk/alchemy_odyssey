import { ParallaxBanner } from "react-scroll-parallax";
import image from "../assets/ecstasy.jpg";

const AboutWork = () => {
    return (
        <div className="work">
            <div className="work-left flex flex-col items-center gap-4 justify-center">
                <h3 className="text-5xl">What we do</h3>
                <p className="px-8 sm:px-0 sm:w-[450px] sm:text-justify">We at Alchemy Odyssey provide luxury accommodations, exquisite dining, and a variety of recreational activities. We offer world-class spa services, guided outdoor adventures, and personalized experiences tailored to your preferences. Our commitment to excellence ensures every guest enjoys unparalleled comfort and unforgettable memories in a breathtaking natural setting.</p>
            </div>
            <div className="work-right">
                <ParallaxBanner layers={[{image:image, speed:-10}]} className="w-full h-[550px] clippath-left object-cover" />
            </div>
        </div>
    );
}

export default AboutWork;
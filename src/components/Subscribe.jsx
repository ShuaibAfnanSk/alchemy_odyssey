import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const images = [
    "https://raw.githubusercontent.com/ShuaibAfnanSk/resort_assests/main/shot-f.jpg",
    "https://raw.githubusercontent.com/ShuaibAfnanSk/resort_assests/main/shot-n.jpg",
    "https://raw.githubusercontent.com/ShuaibAfnanSk/resort_assests/main/shot-c.jpg",
];

const Subscribe = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className="w-full h-[600px] sm:h-[700px] relative mt-[2rem]">
            <div className="flex absolute-container justify-between items-center">
                {images.map((i) => (
                    <img className="shot" src={i} alt="" />
                ))}
            </div>
            {/* <div className="absolute-container flex flex-col gap-4 justify-center items-center">
                <h3 data-aos='fade-up' className="text-5xl">Book Now</h3>
                <p data-aos='fade-up' className="w-[300px] text-center">Experience a trip like never before, filled with adventure, breathtaking views, and unforgettable memories.</p>
            </div> */}
        </section>
    );
}

export default Subscribe;
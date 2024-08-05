import { useParallax } from "react-scroll-parallax";
import CountryCard from "../components/CountryCard";
import Subscribe from "../components/Subscribe";
import resorts from "../data/resorts";

const images = resorts.reduce((acc, item) => {
    return acc.concat(item.gallery);
}, []);


const Gallery = () => {

    return (
        <section className="flex flex-col overflow-hidden">
            <div className="gallery" />
            <div className="flex flex-col gap-12 px-2 sm:px-10 items-center bg-[#f8f8f8] move-up pt-16 rounded-t-[4rem]">
                <div className="flex flex-col items-center">
                    <h4>some camera shots</h4>
                    <h3 className="text-5xl">Gallery</h3>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                    {images.map((i) => (
                        <img src={i} className="w-[150px] h-[150px] md:w-[200px] lg:w-[250px] gallery-card md:h-[200px] lg:h-[250px] rounded-lg object-cover" alt="" />
                    ))}
                </div>
                <Subscribe />
            </div>
        </section>
    );
}

export default Gallery;
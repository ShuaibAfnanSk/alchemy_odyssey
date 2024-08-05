import { useState, useRef } from "react";
import countries from "../data/countries";

const CountryIndex = () => {

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="flex flex-col gap-12">
            <div className="flex flex-col items-center">
                <h4>select from countries</h4>
                <h3 className="text-5xl">Countries</h3>
            </div>
            <div className="flex gap-4 overflow-hidden px-4 sm:px-10" ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {countries.slice(0, 6).map((c) => (
                    <div className="relative min-w-full clippath sm:min-w-[450px] md:min-w-[600px] h-[450px] overflow-hidden rounded-sm">
                        <img src={c.image} className="absolute-container brightness-75 object-cover" />
                        <div className="absolute-container">
                            <div className="flex border-t-[5px] w-[90%] sm:w-[350px] border-[#97c1a9] flex-col h-fit shadow-custom absolute bottom-0 left-0 p-6 justify-center gap-4 bg-white">
                                <h3 className="text-3xl text-[rgba(0,0,0,0.75)]">{c.name}</h3>
                                <p className="text-sm w-full sm:w-[250px]">{c.desc}</p>
                                <button className="button self-end">Explore</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default CountryIndex;
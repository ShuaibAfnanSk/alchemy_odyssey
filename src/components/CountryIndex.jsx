import { useState, useRef } from "react";
import countries from "../data/countries";
import CountryCard from "./CountryCard";

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
            <div className="h-[500px] flex my-10">
                <div className="flex gap-8 overflow-hidden px-4 sm:px-10" ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {countries.map((c) => (
                        <CountryCard item={c} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CountryIndex;
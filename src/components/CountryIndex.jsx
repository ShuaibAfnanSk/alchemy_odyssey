import { useState, useRef } from "react";
import countries from "../data/countries";
import CountryCard from "./CountryCard";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CountryIndex = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

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

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <section className="flex flex-col gap-12">
            <div className="flex flex-col items-center">
                <h4 data-aos='fade-up'>select from countries</h4>
                <h3 data-aos='fade-up' className="text-5xl">Countries</h3>
            </div>
            <div className="h-[500px] flex my-10">
                <div className="flex gap-8 overflow-hidden px-4 sm:px-10" ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
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
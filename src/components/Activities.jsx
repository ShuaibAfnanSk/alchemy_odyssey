import { useEffect, useRef, useState } from "react";
import activities from "../data/activities";
import Aos from "aos";
import 'aos/dist/aos.css';

const Activities = () => {

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
        setScrollLeft(sliderRef.current.scrollLeft)
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
        const walk = (x - startX) * 1;
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
                <h4 data-aos='fade-up'>fun to no end</h4>
                <h3 data-aos='fade-up' className="text-5xl">Activities</h3>
            </div>
            <div data-aos='fade-up' className="flex px-4 sm:px-10 gap-4 overflow-hidden"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {activities.map((a) => (
                    <div className="min-w-[350px] md:min-w-[650px] h-[400px] md:h-[500px] relative">
                        <img src={a.src} className="absolute-container rounded-md object-cover" alt="" />
                        <div className="absolute-container flex flex-col justify-between pb-5">
                            <div className="flex justify-between p-5">
                                <span className="w-3 h-3 rounded-[50%] bg-white"></span>
                                <h3 className="bg-black text-white w-fit rounded-[3rem] px-5 py-2">{a.name}</h3>
                            </div>
                            <div className="w-[300px] flex justify-center items-center bg-white rounded-r-[5rem] p-8">
                                <p className="text-sm">{a.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Activities;
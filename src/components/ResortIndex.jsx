import { Link } from "react-router-dom";
import resorts from "../data/resorts";
import ResortCard from "./ResortCard";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const ResortIndex = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className="w-full flex flex-col gap-12">
            <div className="flex flex-col items-center">
                <h4 data-aos='fade-up'>find your escape</h4>
                <h3 className="text-5xl" data-aos='fade-up'>Resorts</h3>
            </div>
            <div className="flex flex-wrap px-2 sm:px-10 gap-4 justify-center">
                {resorts.slice(0, 4).map((r) => (
                    <ResortCard item={r} />
                ))}
            </div>
            <button data-aos='fade-up' className="button self-center"><Link to={"/resorts"}>explore</Link></button>
        </section>
    );
}

export default ResortIndex;
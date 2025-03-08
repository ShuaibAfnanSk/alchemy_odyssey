import ResortCard from "../components/ResortCard";
import resorts from "../data/resorts";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Ender from "../components/Ender";
import Footer from "../components/Footer";

const Resorts = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <>
            <Navbar />
            <section className="flex flex-col">
                <div className="resort" />
                <div className="flex flex-col gap-12 px-4 sm:px-10 items-center bg-[#f8f8f8] move-up pt-16 rounded-t-[4rem]">
                    <div className="flex flex-col items-center">
                        <h4 data-aos='fade-up'>find your escape</h4>
                        <h3 data-aos='fade-up' className="text-5xl">Resorts</h3>
                    </div>
                    <div className="flex w-full flex-wrap gap-6 justify-center">
                        {resorts.map((r) => (
                            <ResortCard item={r} />
                        ))}
                    </div>
                </div>
            </section>
            <Ender />
            <Footer />
        </>
    );
}

export default Resorts;
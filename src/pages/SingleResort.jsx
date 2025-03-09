import resorts from "../data/resorts";
import styled from "styled-components";
import svg from "../assets/resort.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Fixed = styled.div`
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.image});
`

const activities = ["Diving", "Surfing", "Park", "Golf", "Speed Boating"]

const SingleResort = () => {

    const path = window.location.pathname.split('/')[2];
    const resort = resorts.find((r) => r.id == path);

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <>
            <Navbar />
            <section className="flex flex-col gap-16 mb-24">
                <Fixed image={resort.mainImage} />
                <div className="flex flex-col gap-16 px-4 sm:px-10">
                    <div className="flex justify-between flex-wrap gap-8 overflow-hidden">
                        <div data-aos="fade-right" className="w-[300px] border overflow-hidden border-[rgba(0,0,0,0.15)] rounded-xl relative flex flex-col h-[325px] justify-between p-6">
                            <div className="absolute bottom-[-25px] right-[-25px]">
                                <img className="w-[100px] h-[100px]" src={svg} alt="" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl font-semibold">{resort.name}</h3>
                                <div className="">
                                    <p>Country - {resort.country}</p>
                                    <p>Price - {resort.package}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {activities.map((a) => (
                                    <span className="bg-white px-5 rounded-[3rem] py-2 text-xs">{a}</span>
                                ))}
                            </div>
                        </div>
                        <div data-aos="fade-left" className="w-full md:w-1/2">
                            <p className="sm:text-justify w-full">{resort.desc}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col items-center">
                            <h4>clicks of paradise</h4>
                            <h3 className="text-5xl">Gallery</h3>
                        </div>
                        <div className="relative flex flex-col gap-10 items-center">
                            {resort.gallery.map((g, id) => (
                                <img src={g} key={id} className="card object-cover w-[100%] h-[400px] md:h-[700px] rounded-lg" alt="" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Marquee />
            <Footer />
        </>
    );
}

export default SingleResort;
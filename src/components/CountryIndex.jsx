import { useState } from "react";
import countries from "../data/countries";
import styled from "styled-components";

const CountryElement = styled.li`
    height: calc(800px / ${props => props.stamp});

    @media (max-width: 1024px) {
        height: calc(700px / ${props => props.stamp});
    }

    @media (max-width: 768px) {
        height: calc(500px / ${props => props.stamp});
    }
`

const CountryIndex = () => {

    const [country, setCountry] = useState("Thailand");
    const [active, setActive] = useState("Thailand");

    const selectedCountry = countries.find((c) => c.name === country);

    return (
        <section className="flex flex-col gap-12 bg-[#1a1a1a] text-white py-12 px-4 sm:px-10">
            <div className="flex flex-col items-center">
                <h4 data-aos='fade-up'>select from countries</h4>
                <h3 data-aos='fade-up' className="text-5xl">Countries</h3>
            </div>
            <div data-aos="fade-up" className="flex border-2 border-[rgba(255,255,255,0.1)] md:p-8 lg:p-16 md:gap-8 lg:gap-16 relative w-full h-[700px] lg:h-[800px]">
                <ul className="absolute p-6 md:p-0 z-10 md:z-0 md:w-fit w-full md:relative h-[500px] md:h-full flex flex-col justify-between">
                    {countries.map((c, id) => (
                        <CountryElement stamp={countries.length} className={`country-item flex items-center cursor-pointer md:pr-8 lg:pr-16 ${active === c.name ? "active" : ""}`} key={id}>
                            <span
                                onClick={() => { setCountry(c.name), setActive(c.name) }}
                                onMouseEnter={() => { setCountry(c.name), setActive(c.name) }}>{c.name}</span></CountryElement>
                    ))}
                </ul>
                <div className="w-full absolute md:relative h-full flex flex-col justify-between">
                    <img src={`${selectedCountry.image}?tr=w-1200,h-700,f-auto,q-auto,fo-auto`} className="w-[100%] h-[550px] brightness-50 md:brightness-100 md:h-[475px] lg:h-[525px] object-cover" alt="" />
                    <div className="flex flex-col gap-2 p-6 md:p-0">
                        <h4 className="text-2xl font-zig font-black underline">{selectedCountry.name}</h4>
                        <p>{selectedCountry.desc}</p>
                        <button className="w-fit underline">Explore</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountryIndex;
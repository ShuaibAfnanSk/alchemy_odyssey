import styled from "styled-components";
import testimonial from "../data/testimonial";
import { useState } from "react";
import quote from "../assets/svgs/quotes.svg";
import star from "../assets/svgs/star.svg";

const Slider = styled.div`
    transform: translatex(${props => props.slider * - 310}px);
    transition: 0.5s ease;
`

const Testimonials = () => {

    const [slider, setSlider] = useState(0);

    const handleSlider = (direction) => {
        if (direction === "left") {
            setSlider(slider > 0 ? slider - 1 : 7)
        } else {
            setSlider(slider < 7 ? slider + 1 : 0)
        }
    }

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center">
                <h4 data-aos='fade-up'>what people say</h4>
                <h3 data-aos='fade-up' className="text-5xl">Testimonials</h3>
            </div>
            <div className="relative h-[300px]">
                <div className="flex w-full justify-between top-[50%] absolute z-10">
                    <button className="caret translate-x-[-20px]" onClick={() => handleSlider("left")}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#97c1a9" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></button>
                    <button className="caret translate-x-[20px]" onClick={() => handleSlider("right")}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#97c1a9" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg></button>
                </div>
                <div className="overflow-hidden">
                    <Slider slider={slider} className="flex gap-4">
                        {testimonial.map((t) => (
                            <div data-aos='fade-up' className="min-w-[300px] h-[300px] testimony relative bg-white p-8 flex flex-col justify-between">
                                <img src={`${t?.image}?tr=w-150,h-150,f-auto,q-auto,fo-auto`} loading="lazy" className="w-[75px] object-cover h-[75px] rounded-[50%] top-[-3rem] left-[-3rem]" alt="" />
                                <img src={quote} className="w-[50px] h-[50px] absolute top-4 right-4" alt="" />
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-1">
                                        {Array(t.rating).fill().map((_, i) => (
                                            <img className="w-[20px] h-[20px]" key={i} src={star} alt="star" />
                                        ))}
                                    </div>
                                    <h3 className="text-xl">{t.name}</h3>
                                    <p className="text-sm">{t.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
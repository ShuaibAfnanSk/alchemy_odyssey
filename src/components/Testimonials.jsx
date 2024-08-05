import styled from "styled-components";
import testimonial from "../data/testimonial";
import { useState } from "react";
import quote from "../assets/quotes.svg";
import star from "../assets/star.svg";

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
        <div className="flex flex-col gap-12 overflow-hidden">
            <div className="flex flex-col items-center">
                <h4>what people say</h4>
                <h3 className="text-5xl">Testimonials</h3>
            </div>
            <div className="relative h-[400px]">
                <div className="flex w-full px-5 justify-between top-[50%] absolute z-10">
                    <button className="caret" onClick={() => handleSlider("left")}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></button>
                    <button className="caret" onClick={() => handleSlider("right")}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg></button>
                </div>
                <Slider slider={slider} className="flex px-4 sm:px-10 gap-4">
                    {testimonial.map((t) => (
                        <div className="min-w-[300px] h-[400px] clippath relative bg-white p-8 flex flex-col justify-between">
                            <img src={t.image} className="w-[150px] object-cover h-[150px] rounded-[50%] top-[-3rem] left-[-3rem]" alt="" />
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
    );
}

export default Testimonials;
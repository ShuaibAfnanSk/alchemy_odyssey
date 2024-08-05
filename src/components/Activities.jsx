import styled from "styled-components";
import activities from "../data/activities";
import { useState } from "react";

const Slider = styled.div`
    transform: translateX(${props => props.slide * -100}%);
    // transition: 0.5s ease;
`

const SliderText = styled.div`
    transform: translateX(${props => props.slide * -100}%);
`

const Activities = () => {

    const [slide, setSlide] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlide(slide > 0 ? slide - 1 : 5)
        } else {
            setSlide(slide < 5 ? slide + 1 : 0)
        }
    }

    return (
        <section className="flex w-full relative h-[600px] md:h-fit">
            <div className="overflow-hidden absolute md:relative w-full h-full md:basis-[50%]">
                <Slider className="flex w-full h-full" slide={slide}>
                    {activities.map((a, id) => (
                        <div className="min-w-full h-full md:h-[600px] flex justify-center items-center md:p-4 lg:p-8">
                            <img className="clippath md:w-[95%] lg:w-[85%] brightness-50 md:brightness-100 h-full object-cover" src={a.src} key={id} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="md:basis-[50%] absolute md:relative w-full px-4 py-8 md:p-8 flex h-full sm:h-[600px] flex-col justify-between text-white md:text-black">
                <div className="">
                    <p>enjoy exciting activities</p>
                    <h3 className="text-5xl">Activities</h3>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-white shadow-custom w-[50px] h-[50px] flex items-center justify-center rounded-[50%]" onClick={() => handleClick("left")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#97c1a9" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
                        </button>
                        <button className="bg-white flex shadow-custom items-center justify-center w-[50px] h-[50px] rounded-[50%]" onClick={() => handleClick("right")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#97c1a9" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden w-[250px] md:w-[350px] self-end">
                    <SliderText className="flex" slide={slide}>
                        {activities.map((a, id) => (
                            <div className="min-w-full flex flex-col gap-2" key={id}>
                                <h3 className="text-3xl underline">{a.name}</h3>
                                <p className="text-sm md:text-base">{a.desc}</p>
                                <img src={a.svg} className="w-[100px] self-end h-[100px]" alt="" />
                            </div>
                        ))}
                    </SliderText>
                </div>
            </div>
        </section>
    );
}

export default Activities;
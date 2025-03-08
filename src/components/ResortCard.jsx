import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ResortCard = ({ item }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <div data-aos='fade-up' className="relative w-full min-w-[300px] flex-1 h-[450px] shadow-custom">
            <img loading="lazy" src={item.mainImage} className="absolute-container brightness-75 object-cover" alt="" />
            <div className="absolute right-[-3px] bg-white flex gap-2 top-8 border-r-[3px] border-[#97c1a9] pl-5 pr-3 py-3 rounded-l-full shots-box">
                {item.gallery.map((img) => (
                    <img src={img} className="w-[40px] h-[40px] object-cover rounded-full" alt="" />
                ))}
            </div>
            <div className="absolute w-full bottom-0 container flex items-end gradient-bg">
                <div className="flex flex-col w-full border-t-[5px] border-[#97c1a9] bg-[#fff] p-4">
                    <h3><Link to={`/resort/${item.id}`}>{item.name}</Link></h3>
                    <div className="flex justify-between">
                        <p className="text-[rgba(0,0,0,0.5)]">{item.country}</p>
                        <p className="font-bold">{item.package}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResortCard;
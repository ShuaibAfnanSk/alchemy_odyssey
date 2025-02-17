import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ResortCard = ({ item }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <div data-aos='fade-up' className="relative w-[300px] h-[450px] shadow-custom overflow-hidden">
            <img src={item.mainImage} className="absolute-container brightness-75 object-cover" alt="" />
            <div className="absolute-container flex items-end gradient-bg">
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
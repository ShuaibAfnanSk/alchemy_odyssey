import { Link } from "react-router-dom";

const ResortCard = ({ item }) => {
    return (
        <div data-aos='fade-up' className="relative w-full h-[450px] shadow-custom">
            <img loading="lazy" src={item.mainImage} className="absolute-container brightness-75 object-cover" alt="" />
            <div className="absolute w-full bottom-0 container flex items-end gradient-bg">
                <div className="flex flex-col w-full gap-2 border-t-[5px] border-[#97c1a9] bg-[#fff] p-4">
                    <h3><Link to={`/resort/${item.id}`}>{item.name}</Link></h3>
                    <div className="flex items-center justify-between">
                        <div className="flex resort-polo">
                            {item.gallery.map((img) => (
                                <img src={img} className="w-[35px] h-[35px] border-[3px] border-[#e8e8e8] object-cover rounded-full" alt="" />
                            ))}
                        </div>
                        <p className="font-bold">{item.package}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResortCard;
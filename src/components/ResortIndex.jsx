import { Link } from "react-router-dom";
import resorts from "../data/resorts";
import ResortCard from "./ResortCard";

const ResortIndex = () => {
    return (
        <section className="w-full flex flex-col gap-12">
            <div className="flex flex-col items-center">
                <h4 data-aos='fade-up'>find your escape</h4>
                <h3 className="text-5xl" data-aos='fade-up'>Resorts</h3>
            </div>
            <div className="resort-index px-4 sm:px-10 gap-4">
                {resorts.slice(0, 4).map((r) => (
                    <ResortCard item={r} />
                ))}
            </div>
            <button data-aos='fade-up' className="button self-center"><Link to={"/resorts"}>explore</Link></button>
        </section>
    );
}

export default ResortIndex;
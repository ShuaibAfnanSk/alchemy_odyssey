import { Link } from "react-router-dom";
import resorts from "../data/resorts";
import ResortCard from "./ResortCard";

const ResortIndex = () => {
    return (
        <section className="w-full flex flex-col gap-12">
            <div className="flex flex-col items-center">
                <h4>find your escape</h4>
                <h3 className="text-5xl">Resorts</h3>
            </div>
            <div className="flex flex-wrap px-2 sm:px-10 gap-4 justify-center">
                {resorts.slice(0, 4).map((r) => (
                    <ResortCard item={r} />
                ))}
            </div>
            <button className="button self-center"><Link to={"/about"}>explore</Link></button>
        </section>
    );
}

export default ResortIndex;
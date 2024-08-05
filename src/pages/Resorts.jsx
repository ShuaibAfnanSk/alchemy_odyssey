import ResortCard from "../components/ResortCard";
import Subscribe from "../components/Subscribe";
import resorts from "../data/resorts";

const Resorts = () => {
    return (
        <section className="flex flex-col">
            <div className="resort" />
            <div className="flex flex-col gap-12 px-2 sm:px-10 items-center bg-[#f8f8f8] move-up pt-16 rounded-t-[4rem]">
                <div className="flex flex-col items-center">
                    <h4>find your escape</h4>
                    <h3 className="text-5xl">Resorts</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {resorts.map((r) => (
                        <ResortCard item={r} />
                    ))}
                </div>
                <Subscribe />
            </div>
        </section>
    );
}

export default Resorts;
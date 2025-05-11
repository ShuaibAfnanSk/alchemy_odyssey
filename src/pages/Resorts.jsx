import ResortCard from "../components/ResortCard";
import resorts from "../data/resorts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

const Resorts = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col">
                <div className="resort" />
                <div className="flex flex-col gap-12 px-4 sm:px-10 items-center bg-[#f8f8f8] move-up pt-16 rounded-t-[4rem]">
                    <div className="flex flex-col items-center">
                        <h4 data-aos='fade-up'>find your escape</h4>
                        <h3 data-aos='fade-up' className="text-5xl">Resorts</h3>
                    </div>
                    <div className="w-full gap-6 resort-index">
                        {resorts.map((r) => (
                            <ResortCard item={r} />
                        ))}
                    </div>
                </div>
            </section>
            <Marquee />
            <Footer />
        </>
    );
}

export default Resorts;
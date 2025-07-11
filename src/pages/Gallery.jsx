import countries from "../data/countries";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// const images = countries.reduce((acc, item) => {
//     return acc.concat(item.gallery);
// }, []);


const Gallery = () => {
    return (
        <main className="main">
            <Navbar />
            <section className="flex flex-col">
                <div className="gallery" />
                <div className="flex flex-col gap-12 px-4 sm:px-10 items-center bg-[#f8f8f8] move-up pt-16 rounded-t-[4rem]">
                    <div className="flex flex-col gap-2 items-center">
                        <h4 data-aos='fade-bottom'>some camera shots</h4>
                        <h3 data-aos='fade-bottom' className="text-5xl">Gallery</h3>
                    </div>
                    <div className="flex gap-2 md:gap-4 flex-col">
                        <div className="flex gap-2 md:gap-4 h-[400px] md:h-[600px] overflow-hidden">
                            {countries.slice(0, 1).map((c) => (
                                <img data-aos='fade-right' src={c.image} className="w-[50%] md:w-[65%] h-[100%] object-cover" alt="" />
                            ))}
                            <div className="flex flex-col gap-2 md:gap-4 w-[50%] md:w-[35%] h-[100%]">
                                {countries.slice(1, 3).map((c) => (
                                    <img data-aos='fade-left' src={c.image} className="w-[100%] h-[50%] object-cover" alt="" />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 md:gap-4 justify-between overflow-hidden flex-wrap flex-col sm:flex-row sm:flex-nowrap">
                            {countries.slice(3, 5).map((c) => (
                                <img data-aos='fade-up' src={c.image} className="w-full h-[400px] md:h-[500px] sm:w-[50%] object-cover" alt="" />
                            ))}
                        </div>
                        <div className="flex gap-2 md:gap-4 h-[400px] md:h-[600px] overflow-hidden">
                            <div className="flex flex-col gap-2 md:gap-4 w-[50%] md:w-[35%] h-[100%]">
                                {countries.slice(5, 7).map((c) => (
                                    <img data-aos='fade-right' src={c.image} className="w-[100%] h-[50%] object-cover" alt="" />
                                ))}
                            </div>
                            {countries.slice(7, 8).map((c) => (
                                <img data-aos='fade-left' src={c.image} className="w-[50%] md:w-[65%] h-[100%] object-cover" alt="" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Gallery;
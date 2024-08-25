import Subscribe from "../components/Subscribe";
import countries from "../data/countries";

// const images = countries.reduce((acc, item) => {
//     return acc.concat(item.gallery);
// }, []);


const Gallery = () => {

    return (
        <section className="flex flex-col">
            <div className="gallery" />
            <div className="flex flex-col gap-12 px-2 sm:px-10 items-center bg-[#f8f8f8] move-up pt-16 rounded-t-[4rem]">
                <div className="flex flex-col gap-2 items-center">
                    <h4>some camera shots</h4>
                    <h3 className="text-5xl">Gallery</h3>
                </div>
                <div className="flex gap-2 md:gap-4 flex-col">
                    <div className="flex gap-2 md:gap-4 h-[400px] md:h-[600px] overflow-hidden">
                        {countries.slice(0, 1).map((c) => (
                            <img src={c.image} className="w-[50%] md:w-[65%] h-[100%] object-cover" alt="" />
                        ))}
                        <div className="flex flex-col gap-2 md:gap-4 w-[50%] md:w-[35%] h-[100%]">
                            {countries.slice(1, 3).map((c) => (
                                <img src={c.image} className="w-[100%] h-[50%] object-cover" alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 justify-between overflow-hidden flex-wrap flex-col sm:flex-row sm:flex-nowrap">
                        {countries.slice(3, 5).map((c) => (
                            <img src={c.image} className="w-full h-[400px] md:h-[500px] sm:w-[50%] object-cover" alt="" />
                        ))}
                    </div>
                    <div className="flex gap-2 md:gap-4 h-[400px] md:h-[600px] overflow-hidden">
                        <div className="flex flex-col gap-2 md:gap-4 w-[50%] md:w-[35%] h-[100%]">
                            {countries.slice(5, 7).map((c) => (
                                <img src={c.image} className="w-[100%] h-[50%] object-cover" alt="" />
                            ))}
                        </div>
                        {countries.slice(7, 8).map((c) => (
                            <img src={c.image} className="w-[50%] md:w-[65%] h-[100%] object-cover" alt="" />
                        ))}
                    </div>
                </div>
            </div>
            <Subscribe />
        </section>
    );
}

export default Gallery;
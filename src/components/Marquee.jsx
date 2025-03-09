import { useEffect } from "react";
import countries from "../data/countries";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Marquee = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section data-aos='fade-up' className="overflow-hidden mt-8 mb-24">
            <div className='marquee flex gap-4 sm:gap-8 items-center'>
                <div className='flex gap-4 sm:gap-8 img-marquee'>
                    {countries.map((c, id) => (
                        <img key={id} src={c.image} className='min-w-[200px] h-[200px] sm:min-w-[250px] sm:h-[250px] rounded-xl object-cover' />
                    ))}
                </div>
                <div className='flex gap-4 sm:gap-8 img-marquee'>
                    {countries.map((c, id) => (
                        <img key={id} src={c.image} className='min-w-[200px] h-[200px] sm:min-w-[250px] sm:h-[250px] rounded-xl object-cover' />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Marquee;
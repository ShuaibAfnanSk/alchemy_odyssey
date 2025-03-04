import AboutIndex from "../components/AboutIndex";
import AboutWe from "../components/AboutWe";
import Ender from "../components/Ender";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section>
            <div className="about" />
            <div className="rounded-t-[4rem] px-4 sm:px-10 flex flex-col gap-16 bg-[#f8f8f8] move-up overflow-hidden">
                <AboutWe />
                <AboutIndex />
                <Team />
                <Testimonials />
            </div>
        </section>
    );
}

export default About;
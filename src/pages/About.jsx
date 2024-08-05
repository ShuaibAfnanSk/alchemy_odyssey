import AboutIndex from "../components/AboutIndex";
import AboutWe from "../components/AboutWe";
import Subscribe from "../components/Subscribe";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const About = () => {
    return (
        <section>
            <div className="about" />
            <div className="rounded-[4rem] flex flex-col gap-16 bg-[#f8f8f8] move-up">
                <AboutWe />
                <AboutIndex />
                <Team />
                <Testimonials />
                <Subscribe />
            </div>
        </section>
    );
}

export default About;
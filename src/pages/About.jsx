import AboutIndex from "../components/AboutIndex";
import AboutWe from "../components/AboutWe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const About = () => {
    return (
        <main className="main">
            <Navbar />
            <section>
                <div className="about" />
                <div className="rounded-t-[4rem] px-4 sm:px-10 flex flex-col gap-12 bg-[#f8f8f8] move-up overflow-hidden">
                    <AboutWe />
                    <AboutIndex />
                    <Team />
                    <Testimonials />
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default About;
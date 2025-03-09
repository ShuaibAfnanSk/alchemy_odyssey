import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col gap-16">
                <ContactForm />
                <Faq />
            </section>
            <Marquee />
            <Footer />
        </>
    );
}

export default Contact;
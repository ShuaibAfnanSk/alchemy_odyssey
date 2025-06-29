import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <main className="main">
            <Navbar />
            <section className="flex flex-col gap-12">
                <ContactForm />
                <Faq />
            </section>
            <Footer />
        </main>
    );
}

export default Contact;
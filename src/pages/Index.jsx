import Ender from "../components/Ender";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import IndexRest from "../components/IndexRest";
import Navbar from "../components/Navbar";

const Index = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <IndexRest />
            <Ender />
            <Footer />
        </>
    );
}

export default Index;
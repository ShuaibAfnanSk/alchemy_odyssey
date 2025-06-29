import Footer from "../components/Footer";
import Hero from "../components/Hero";
import IndexRest from "../components/IndexRest";
import Navbar from "../components/Navbar";


const Index = () => {
    return (
        <main className="main">
            <Navbar />
            <Hero />
            <IndexRest />
            <Footer />
        </main>
    );
}

export default Index;
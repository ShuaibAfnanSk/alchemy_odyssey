import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import island from "../assets/gallery.jpg";

const Subscribe = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section>
            
        </section>
    );
}

export default Subscribe;
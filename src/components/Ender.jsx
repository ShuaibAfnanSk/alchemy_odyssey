import { useState, useEffect } from "react";
import rcOne from "../assets/rc-3.jpg";
import rcTwo from "../assets/rc-2.jpg";
import rcThree from "../assets/rc-1.jpg";
import { Parallax } from "react-scroll-parallax";

const Ender = () => {
    const [translateYValues, setTranslateYValues] = useState({
        left: [],
        right: [],
    });

    useEffect(() => {
        const updateTranslateY = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setTranslateYValues({ left: ["75px", "-75px"], right: ["-125px", "125px"] });
            } else if (width >= 640) {
                setTranslateYValues({ left: ["75px", "-75px"], right: ["-100px", "100px"] });
            } else {
                setTranslateYValues({ left: ["50px", "-50px"], right: ["-50px", "50px"] });
            }
        };

        updateTranslateY(); // Set initial values
        window.addEventListener("resize", updateTranslateY);
        
        return () => window.removeEventListener("resize", updateTranslateY);
    }, []);

    return (
        <section className="px-6 sm:px-10 w-full flex justify-center items-center mt-0 sm:mt-16 mb-16 sm:mb-32">
            <div className="w-[250px] h-[300px] sm:w-[350px] sm:h-[400px] lg:w-[450px] lg:h-[500px] relative flex items-center justify-center">
                <Parallax 
                    className="overflow-hidden absolute lg:w-[300px] lg:h-[400px] sm:w-[250px] sm:h-[300px] w-[200px] h-[250px] rounded-md lg:left-[-270px] sm:left-[-150px] left-[-50px]" 
                    translateY={translateYValues.left}
                >
                    <img className="w-full h-full object-cover" src={rcThree} alt="" />
                </Parallax>
                <img src={rcTwo} className="w-full z-0 h-full object-cover rounded-md" alt="" />
                <Parallax 
                    className="absolute overflow-hidden sm:w-[250px] sm:h-[250px] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] rounded-md lg:right-[-250px] sm:right-[-100px] right-[-50px] z-10" 
                    translateY={translateYValues.right}
                >
                    <img src={rcOne} alt="" className="w-full h-full object-cover" />
                </Parallax>
            </div>
        </section>
    );
}

export default Ender;
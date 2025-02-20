import rcOne from "../assets/rc-3.jpg";
import rcTwo from "../assets/rc-2.jpg";
import rcThree from "../assets/rc-1.jpg";

const Ender = () => {
    return ( 
        <section className="overflow-hidden px-4 sm:px-10w-full flex justify-center items-center mt-0 sm:mt-16 mb-16 sm:mb-32">
            <div className="w-[325px] sm:w-[525px] h-[300px] sm:h-[500px] relative resort-join flex justify-center items-center">
                <img src={rcOne} data-aos='fade-right' alt="" />
                <img src={rcTwo} data-aos='fade-up' alt="" />
                <img src={rcThree} data-aos='fade-left' alt="" />
            </div>
        </section>
     );
}
 
export default Ender;
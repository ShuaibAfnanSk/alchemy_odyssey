import banner from "../assets/banner.mp4";

const Hero = () => {
    return (
        <section className="w-full h-100h relative">
            <div className="w-full h-full">
                <video className="w-full h-full object-cover" playsInline autoPlay loop muted>
                    <source src={banner} type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default Hero;
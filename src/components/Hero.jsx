import banner from "../assets/banner.mp4";

const Hero = () => {
    return (
        <section className="w-full h-100h">
            <div className="w-full h-full relative flex items-center justify-center">
                <video className="w-full h-full object-cover" playsInline autoPlay loop muted>
                    <source src={banner} type="video/mp4" />
                </video>
                <h3 className="title">Odyssey</h3>
            </div>
        </section>
    );
}

export default Hero;
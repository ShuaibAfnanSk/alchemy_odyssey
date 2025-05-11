import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="w-full h-100h relative">
            <div className="w-full h-full absolute">
                <video className="w-full h-full object-cover" playsInline autoPlay loop muted>
                    <source src="https://ik.imagekit.io/akiAfnan/Odyssey/banner.mp4?updatedAt=1746975530237" type="video/mp4" />
                </video>
            </div>
            <div className="px-8 sm:pl-[100px] lg:pl-[150px] absolute w-full h-full flex items-center text-white">
                <div className="flex flex-col gap-8 items-start">
                    <div className="flex flex-col uppercase">
                        <h4 className="text-xl translate-x-2">Alchemy</h4>
                        <h3 className="text-8xl font-black font-os">Odyssey</h3>
                    </div>
                    <div className="translate-x-2 flex gap-6 items-center">
                        <span className="h-[80px] sm:h-[50px] w-[5px] bg-white"></span>
                        <p className="w-full sm:w-[400px]">Indulge in luxury, breathtaking views, and unforgettable experiences. Book your perfect getaway with our exclusive resort packages!</p>
                    </div>
                    <button className="py-4 px-8 border rounded-lg border-white"><Link to={'/resorts'}>Explore</Link></button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
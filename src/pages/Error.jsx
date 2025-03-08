import { Link } from "react-router-dom";
import resort from "../assets/404.jpg";

const Error = () => {
    return (
        <section className="relative w-full h-[100vh]">
            <div className="absolute w-full h-full">
                <img src={resort} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-full h-full error-box text-white absolute flex gap-6 items-center flex-col justify-center px-16">
                <h4 className="text-9xl">404</h4>
                <p>This page doesn't exist!</p>
                <Link to={'/'} className="w-fit"><button className="px-8 py-4 rounded-3xl text-black bg-white">Go back to Home</button></Link>
            </div>
        </section>
    );
}

export default Error;
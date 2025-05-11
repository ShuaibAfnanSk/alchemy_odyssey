import { Link } from "react-router-dom";
import logo from "../assets/svgs/logo.svg";
import { useState, useEffect } from "react";
import menu from "../assets/svgs/menu.svg";
import resort from "../assets/svgs/resort.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleOpen = () => {
        setOpen(prev => !prev);
    };

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full items-center px-10 h-[100px] fixed z-50 flex justify-between transition-colors duration-300 ${scrollY > 100 ? 'bg-[rgba(255,255,255)] border-b border-[rgba(0,0,0,0.1)]' : ''
                }`}
        >
            <Link to={"/"}>
                <img src={logo} className="w-[50px] h-[50px]" alt="Logo" />
            </Link>
            <div
                style={open ? { top: "0" } : { top: "-100vh" }}
                className="menu"
            >
                <button onClick={handleOpen} className="bg-[#97c1a9] close shadow-custom rounded-[50%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                    </svg>
                </button>
                <img src={resort} className="absolute nav-svg left-[-40px] rotate-[25deg] bottom-[-65px] w-[200px] h-[200px]" alt="" />
                <ul className="nav">
                    <Link to={"/resorts"}><li onClick={handleOpen}>Resorts</li></Link>
                    <Link to={"/gallery"}><li onClick={handleOpen}>Gallery</li></Link>
                    <Link to={"/about"}><li onClick={handleOpen}>About</li></Link>
                    <Link to={"/contact"}><li onClick={handleOpen}>Contact</li></Link>
                </ul>
            </div>
            <button onClick={handleOpen} className="bg-[#fff] open shadow-custom rounded-[50%]">
                <img src={menu} className="w-[20px] h-[20px]" alt="Menu" />
            </button>
        </header>
    );
}

export default Navbar;

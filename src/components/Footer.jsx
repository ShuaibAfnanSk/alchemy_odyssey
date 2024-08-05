import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";

const icons = [insta, twitter, fb, linkedin]

const links = ["Resorts", "Countries", "Gallery" ,"About", "Contact"]

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className="px-4 md:px-10 py-5 footer">
            <div className="border-b-[1px] flex flex-wrap gap-4 justify-between items-center pt-5 pb-10 sm:py-10 border-[#fff]">
                <ul className="flex items-center gap-4 flex-wrap md:gap-8">
                    {links.map((l) => (
                        <li>{l}</li>
                    ))}
                </ul>
                <div className="flex gap-4">
                    {icons.map((i) => (
                        <img src={i} className="w-[25px] cursor-pointer h-[25px]" alt="" />
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <p className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base"><span className="text-xl sm:text-3xl">©</span> copyright <Link to={'/'} className="underline">alchemy</Link> {date} all rights reserved</p>
                <img src={logo} className="w-[50px] h-[50px]" alt="" />
            </div>
        </footer>
    );
}

export default Footer;
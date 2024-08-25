import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";

const icons = [insta, twitter, fb, linkedin]

const links = ["Resorts", "Countries", "Gallery", "About", "Contact"]

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className="border-t border-[#97c1a9] mt-20">
            <div className="flex justify-between flex-wrap items-center gap-10 px-4 sm:px-10 py-8">
                <ul>
                    <li>Home</li>
                    <li>Resorts</li>
                    <li>Gallery</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex flex-col gap-2 items-center">
                    <h3>Subscribe to our newsletter</h3>
                    <div className="subscriber w-[300px] sm:w-[325px]">
                        <input type="text" className="text-sm sm:text-base" placeholder="john.doe@gmail.com" />
                        <button className="button">submit</button>
                    </div>
                </div>
            </div>
            <div className="bg-[#97c1a9] flex-wrap px-4 sm:px-10 py-5 flex items-center gap-4 justify-between">
                <img src={logo} className="w-[50px] h-[50px]" alt="" />
                <p>© {date} alchemy all rights reserved</p>
                <div className="flex gap-2">
                    {icons.map((i) => (
                        <img src={i} className="" alt="" />
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
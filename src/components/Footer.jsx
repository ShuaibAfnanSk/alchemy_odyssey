import logo from "../assets/svgs/logo.svg";
import insta from "../assets/svgs/insta.svg";
import twitter from "../assets/svgs/twitter.svg";
import fb from "../assets/svgs/fb.svg";
import linkedin from "../assets/svgs/linkedin.svg";

const icons = [insta, twitter, fb, linkedin]

const links = ["Resorts", "Countries", "Gallery", "About", "Contact"]

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className="border-t border-[rgba(0,0,0,0.15)] rounded-t-[3rem]">
            <div className="flex md:flex-row flex-col sm:justify-between items-center w-full gap-10 px-4 sm:px-10 py-10">
                <div className="flex flex-col gap-2 items-center">
                    <h3>Follow us on</h3>
                    <div className="flex items-center gap-2 text-xl">
                        <div className="w-[50px] h-[50px] border border-[rgba(0,0,0,0.1)] bg-white rounded-full flex items-center justify-center"><i class="ph ph-x-logo"></i></div>
                        <div className="w-[50px] h-[50px] border border-[rgba(0,0,0,0.1)] bg-white rounded-full flex items-center justify-center"><i class="ph ph-instagram-logo"></i></div>
                        <div className="w-[50px] h-[50px] border border-[rgba(0,0,0,0.1)] bg-white rounded-full flex items-center justify-center"><i class="ph ph-facebook-logo"></i></div>
                        <div className="w-[50px] h-[50px] border border-[rgba(0,0,0,0.1)] bg-white rounded-full flex items-center justify-center"><i class="ph ph-linkedin-logo"></i></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center w-full sm:w-fit">
                    <h3>Subscribe to our newsletter</h3>
                    <div className="subscriber border border-[rgba(0,0,0,0.2)] sm:w-[400px] w-full">
                        <input type="text" className="text-sm sm:text-base" placeholder="john.doe@gmail.com" />
                        <button className="button">Submit</button>
                    </div>
                </div>
            </div>
            <div className="px-4 bg-white sm:px-10 h-[100px] flex justify-between items-center gap-4">
                <img src={logo} className="w-[50px] h-[50px]" alt="" />
                <p className="text-sm sm:text-base">© {date} alchemy all rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
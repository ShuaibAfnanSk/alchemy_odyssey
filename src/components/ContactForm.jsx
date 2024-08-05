import contact from "../assets/contact.jpg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";

const icons = [insta, twitter, fb, linkedin]

const ContactForm = () => {
    return (
        <div className="relative w-full h-[675px]">
            <img src={contact} className="absolute w-[85%] sm:w-[60%] clippath-br h-[600px] object-cover bottom-0" alt="" />
            <div className="gap-2 md:bg-[rgba(255,255,255,0.1)] md:backdrop-blur-[25px] md:gap-0 md:p-10 md:border-[2px] w-fit md:w-[700px] md:items-center md:justify-between md:h-[400px] flex flex-col md:flex-row absolute right-4 md:border-[#97c1a9] md:rounded-xl">
                <form className="flex blurred flex-col gap-4 md:gap-0 h-full md:justify-between">
                    <input type="text" className="input" placeholder="John Doe" name="" id="" />
                    <input type="email" className="input" placeholder="john.doe@gmail.com" name="" id="" />
                    <textarea name="" className="textarea" placeholder="What do want to talk about" id=""></textarea>
                    <button className="button">Submit</button>
                </form>
                <div className="flex blurred flex-col gap-4 md:gap-0 md:justify-between h-full">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-3xl">Contact</h4>
                        <p>odyssey.alchemy@gmail.com</p>
                        <p>+1 (555) 291-1110</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-3xl">Based In</h4>
                        <p>Atlanta, Georgia, USA - 30394</p>
                    </div>
                    <div className="flex gap-4">
                        {icons.map((i) => (
                            <img src={i} className="w-[25px] cursor-pointer h-[25px]" alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
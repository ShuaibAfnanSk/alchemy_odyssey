import { useState } from "react";
import faqs from "../data/faq";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import beach from "../assets/beach.svg";

const Faq = () => {

    const [show, setShow] = useState(0);

    const handleShow = (id) => {
        setShow((prev) => (prev === id ? null : id))
    }

    return (
        <div className="section px-4 sm:px-10 mb-16">
            <div className="flex flex-col items-center">
                <h4>frequently asked questions</h4>
                <h3 className="text-5xl text-center">Common Inquiries</h3>
            </div>
            <div className="tail">
                {faqs.map((f, id) => (
                    <div key={id} className="container">
                        <div className="block shadow-custom">
                            <p className="text-sm sm:text-base">{f.question}</p>
                            <div onClick={() => handleShow(id)} className="action">
                                <img alt="icon" className="" src={show === id ? (minus) : (plus)} />
                            </div>
                        </div>
                        <div style={show === id ? { display: "block" } : { display: "none" }} className="relative text overflow-hidden">
                            <p className="text-sm text-[rgba(0,0,0,0.8)] sm:text-base sm:w-[400px]">{f.answer}</p>
                            <img src={beach} className="absolute w-[100px] translate-y-[15px] h-[100px] bottom-0 right-0" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
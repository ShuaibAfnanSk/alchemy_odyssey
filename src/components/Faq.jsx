import { useState } from "react";
import faqs from "../data/faq";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

const Faq = () => {

    const [show, setShow] = useState(0);

    const handleShow = (id) => {
        setShow((prev) => (prev === id ? null : id))
    }

    return (
        <div className="section px-2 sm:px-0">
            <div className="flex flex-col items-center">
                <h4>frequently asked questions</h4>
                <h3 className="text-5xl text-center">Common Inquiries</h3>
            </div>
            <div className="tail">
                {faqs.map((f, id) => (
                    <div key={id} className="container">
                        <div className="block shadow-custom">
                            <p className="text-sm sm:text-base">{f.question}</p>
                            <div>
                                <div onClick={() => handleShow(id)} className="action">
                                    <img alt="icon" src={show === id ? (minus) : (plus)} />
                                </div>
                            </div>
                        </div>
                        <div style={show === id ? { display: "block" } : { display: "none" }} className="text">
                            <p className="text-sm text-[rgba(0,0,0,0.8)] sm:text-base sm:w-[400px]">{f.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
const images = ["https://ik.imagekit.io/akiAfnan/Odyssey/polo-t.jpg?updatedAt=1746975532160", "https://ik.imagekit.io/akiAfnan/Odyssey/flip-n.jpg?updatedAt=1746975528594"];

const AboutWe = () => {

    return (
        <div className="who-we">
            <div className="who-left">
                <div className="who-box" data-aos='fade-right'>
                    {
                        images.map((i) => (
                            <img className="flips rounded-xl object-cover" src={i} alt="" />
                        ))
                    }
                </div>
            </div>
            <div className="who-right flex flex-col items-center gap-8 justify-center">
                <h3 className="text-4xl font-os" data-aos='fade-up'>Who we are</h3>
                <p className="sm:w-[450px] sm:text-justify" data-aos='fade-up'>We are a global resort management company dedicated to providing outstanding guest experiences in diverse locations. Our portfolio includes premier resorts in breathtaking destinations worldwide. Committed to excellence and sustainability, our team of hospitality experts strives to create cherished memories for guests, embracing the culture and beauty of each locale.</p>
            </div>
        </div>
    );
}

export default AboutWe;
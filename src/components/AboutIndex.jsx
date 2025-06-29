const AboutIndex = () => {

    return (
        <section className="what-we">
            <div className="what-left">
                <h3 data-aos='fade-up' className="text-4xl font-os">What we do</h3>
                <p data-aos='fade-up' className="sm:w-[450px] sm:text-justify">We manage a collection of luxurious resorts across multiple countries, offering unparalleled hospitality and unique experiences. Our resorts feature world-class amenities, exquisite dining, and exciting activities, ensuring every guest enjoys a memorable stay. We blend local charm with exceptional service to create unforgettable vacation experiences.</p>
            </div>
            <div className="what-right">
                <div className="what-box" data-aos='fade-left'>
                    <img className="polos" src="https://ik.imagekit.io/akiAfnan/Odyssey/shot-f.jpg?tr=w-400,h-400,f-auto,q-auto,fo-auto" alt="" />
                    <img className="polos" src="https://ik.imagekit.io/akiAfnan/Odyssey/shot-i.jpg?tr=w-400,h-400,f-auto,q-auto,fo-auto" alt="" />
                    <img className="polos" src="https://ik.imagekit.io/akiAfnan/Odyssey/shot-s.jpg?tr=w-400,h-400,f-auto,q-auto,fo-auto" alt="" />
                </div>
            </div>
        </section>
    );
}

export default AboutIndex;
const AboutIndex = () => {

    return (
        <section className="what-we">
            <div className="what-left">
                <h3 data-aos='fade-up' className="text-4xl font-os">What we do</h3>
                <p data-aos='fade-up' className="sm:w-[450px] sm:text-justify">We manage a collection of luxurious resorts across multiple countries, offering unparalleled hospitality and unique experiences. Our resorts feature world-class amenities, exquisite dining, and exciting activities, ensuring every guest enjoys a memorable stay. We blend local charm with exceptional service to create unforgettable vacation experiences.</p>
            </div>
            <div className="what-right">
                <div className="what-box" data-aos='fade-left'>
                    <img className="polos" src="https://raw.githubusercontent.com/ShuaibAfnanSk/resort_assests/main/shot-f.jpg" alt="" />
                    <img className="polos" src="https://raw.githubusercontent.com/ShuaibAfnanSk/resort_assests/main/shot-i.jpg" alt="" />
                    <img className="polos" src="https://raw.githubusercontent.com/ShuaibAfnanSk/resort_assests/main/shot-s.jpg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default AboutIndex;
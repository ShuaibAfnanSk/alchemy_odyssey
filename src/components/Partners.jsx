import shake from '../assets/svgs/shake.svg'

const Partners = () => {

    const sponsors = [
        "Marriott Bonvoy",
        "Hilton Honors",
        "Expedia",
        "Airbnb Luxe",
        "TripAdvisor",
        "Emirates Holidays",
        "Booking.com",
        "Club Med",
        "GoPro",
        "Mastercard Travel Rewards"
    ];

    return (
        <section className='px-4 sm:px-10 flex flex-col gap-16 overflow-hidden'>
            <div className='sponsor-marquee-con flex flex-col gap-4'>
                <div data-aos='fade' className='marquee flex gap-4 items-center'>
                    <div className='flex gap-4'>
                        {sponsors.map((sponsor, id) => (
                            <div key={id} className='px-4 flex items-center justify-center gap-4 rounded-full py-2 border border-[rgba(0,0,0,0.1)]'><span className='w-[5px] h-[5px] bg-black rounded-full'></span><p className='whitespace-nowrap'>{sponsor}</p></div>
                        ))}
                    </div>
                    <div className='flex gap-4'>
                        {sponsors.map((sponsor, id) => (
                            <div key={id} className='px-4 flex items-center justify-center gap-4 rounded-full py-2 border border-[rgba(0,0,0,0.1)]'><span className='w-[5px] h-[5px] bg-black rounded-full'></span><p className='whitespace-nowrap'>{sponsor}</p></div>
                        ))}
                    </div>
                </div>
                <div data-aos='fade' className='marquee flex gap-4 items-center'>
                    <div className='flex gap-4'>
                        {sponsors.map((sponsor, id) => (
                            <div key={id} className='px-4 flex items-center justify-center gap-4 rounded-full py-2 border border-[rgba(0,0,0,0.1)]'><span className='w-[5px] h-[5px] bg-black rounded-full'></span><p className='whitespace-nowrap'>{sponsor}</p></div>
                        ))}
                    </div>
                    <div className='flex gap-4'>
                        {sponsors.map((sponsor, id) => (
                            <div key={id} className='px-4 flex items-center justify-center gap-4 rounded-full py-2 border border-[rgba(0,0,0,0.1)]'><span className='w-[5px] h-[5px] bg-black rounded-full'></span><p className='whitespace-nowrap'>{sponsor}</p></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col-reverse gap-4 items-center'>
                <div data-aos='fade-right' className='relative flex bg-white overflow-hidden rounded-xl flex-col gap-12 lg:h-[425px] w-full lg:w-[500px] p-8 justify-between border border-[rgba(0,0,0,0.1)]'>
                    <h4 className='text-2xl font-os'>Our Partners</h4>
                    <img src={shake} className='absolute w-[100px] h-[100px] rotate-[20deg] right-[-15px] top-[-15px]' alt="" />
                    <div className='flex flex-col gap-4 text-base'>
                        <div className='flex'><li></li><p>Trusted Global Partners – Collaborating with top travel brands to bring you exclusive resort experiences.</p></div>
                        <div className='flex'><li></li><p>Luxury Hospitality Ties – Partnered with premium hotels, airlines, and adventure providers for seamless vacations.</p></div>
                        <div className='flex'><li></li><p>Exclusive Memberships – Special alliances with elite travel networks ensuring unmatched perks and personalized stays.</p></div>
                    </div>
                </div>
                <div data-aos='fade-left' className='h-[425px] flex-1'>
                    <img src="https://ik.imagekit.io/akiAfnan/Odyssey/gallery.jpg?updatedAt=1746975528480" alt="" className='rounded-xl h-full object-cover w-full' />
                </div>
            </div>
        </section>
    );
}

export default Partners;
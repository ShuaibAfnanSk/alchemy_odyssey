import resorts from "../data/resorts";
import styled from "styled-components";
import Subscribe from "../components/Subscribe";

const Fixed = styled.div`
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.image});
`

const SingleResort = () => {

    const path = window.location.pathname.split('/')[2];
    const resort = resorts.find((r) => r.id == path);

    return (
        <section>
            <Fixed image={resort.mainImage} />
            <div className="flex gap-12 w-full flex-col px-4 pb-4 rounded-t-[4rem] move-up sm:px-10 pt-16 bg-[#f8f8f8]">
                <div className="flex w-full flex-col items-center gap-4">
                    <div className="flex gap-2">
                        <span>Country - </span>
                        <h4>{resort.country}</h4>
                    </div>
                    <button className="button-b">package - {resort.package}</button>
                    <h3 className="text-5xl w-full sm:text-6xl sm:-[350px] uppercase font-os text-center">{resort.name}</h3>
                    <p className="w-full text-sm md:text-base md:w-[750px]">{resort.desc}</p>
                </div>
                <div className="relative w-full flex flex-col items-center gap-10">
                    {resort.gallery.map((g) => (
                        <div className="h-[400px] rounded-xl overflow-hidden sm:h-[550px] cards sticky">
                            <img src={g} className="w-full object-cover h-full" alt="" />
                        </div>
                    ))}
                    <div className="sticky h-[200px]"></div>
                </div>
                <Subscribe />
            </div>
        </section >
    );
}

export default SingleResort;
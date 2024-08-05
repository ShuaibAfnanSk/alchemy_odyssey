import CountryCard from "../components/CountryCard";
import Subscribe from "../components/Subscribe";
import countries from "../data/countries";

const Countries = () => {
    return (
        <section className="flex flex-col">
            <div className="country" />
            <div className="flex flex-col gap-12 px-2 sm:px-10 items-center bg-[#f8f8f8] move-up pt-16 rounded-t-[4rem]">
                <div className="flex flex-col items-center">
                    <h4>select your countries</h4>
                    <h3 className="text-5xl">Countries</h3>
                </div>
                <div className="column-container">
                    {countries.map((c) => (
                        <CountryCard item={c} />
                    ))}
                </div>
                <Subscribe />
            </div>
        </section>
    );
}

export default Countries;
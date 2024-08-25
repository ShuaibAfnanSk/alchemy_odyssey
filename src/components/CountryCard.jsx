const CountryCard = ({item}) => {
    return ( 
        <div className="min-w-[350px] countrycard sm:min-w-[400px] h-[350px] sm:h-[400px] relative">
            <img className="absolute-container rounded-[50%] object-cover brightness-75" src={item.image} alt="" />
            <div className="absolute-container flex countryblock">
                <div className="flex flex-col gap-2 highlighter bg-white countrycontent">
                    <h3 className="text-xl sm:text-2xl">{item.name}</h3>
                    <p className="text-xs sm:text-sm w-[150px] sm:w-[175px] text-center">{item.desc}</p>
                </div>
            </div>
        </div>
     );
}
 
export default CountryCard;
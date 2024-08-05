const CountryCard = ({item}) => {
    return ( 
        <div className="w-full clippath-full h-[350px] overflow-hidden relative mb-[1rem]">
            <img className="absolute-container object-cover brightness-75" src={item.image} alt="" />
            <div className="absolute-container">
                <div className="flex p-6 flex-col border-t-[5px] border-[#97c1a9] absolute bottom-4 left-4 gap-2 bg-white">
                    <h3 className="text-2xl">{item.name}</h3>
                    <p className="w-[250px] text-sm">{item.desc}</p>
                </div>
            </div>
        </div>
     );
}
 
export default CountryCard;
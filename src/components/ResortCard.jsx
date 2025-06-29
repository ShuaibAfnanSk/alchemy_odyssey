import { Link } from "react-router-dom";

const ResortCard = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-custom"
    >
      <img
        loading="lazy"
        src={`${item?.mainImage}?tr=w-500,h-500,f-auto,q-auto,fo-auto`}
        className="absolute-container object-cover"
        alt=""
      />
      <div className="overlay-transparent absolute-container"></div>
      <Link
        to={`/resort/${item.id}`}
        className="absolute w-full h-full p-5 flex items-end text-white"
      >
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-bold">{item.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex resort-polo">
              {item.gallery.map((img) => (
                <img
                  loading="lazy"
                  src={`${img}?tr=w-80,h-80,f-auto,q-auto,fo-auto`}
                  className="w-[40px] h-[40px] border-[3px] border-[#e8e8e8] object-cover rounded-full"
                  alt=""
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <i class="ph ph-coin-vertical"></i>
              <p className="font-bold">{item.package}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResortCard;

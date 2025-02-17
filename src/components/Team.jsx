import team from "../data/team";
import lead from "../assets/lead.png";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";

const icons = [insta, twitter, fb, linkedin];

const Team = () => {
    return (
        <div className="flex flex-col gap-12 py-10 px-4">
            <div className="flex flex-col items-center">
                <h4 data-aos='fade-up'>people behind odyssey</h4>
                <h3 data-aos='fade-up' className="text-5xl">Team</h3>
            </div>
            <div className="flex flex-col gap-10 items-center">
                <div data-aos='fade-up' className="bg-white shadow-custom lg:h-[500px] flex flex-col items-center lg:items-end lg:flex-row gap-10 w-fit">
                    <img src={lead} className="w-[300px] lg:w-[400px] object-cover h-full" alt="" />
                    <div className="px-4 sm:px-10 pb-10 flex items-center lg:items-start justify-end flex-col">
                        <div className="flex gap-4 mb-4">
                            {icons.map((i) => (
                                <img src={i} className="w-[25px] cursor-pointer h-[25px]" alt="" />
                            ))}
                        </div>
                        <h3 className="text-3xl">David Smith</h3>
                        <p className="text-sm mb-4 text-[rgba(0,0,0,0.75)]">Cheif Executive Officer & Founder</p>
                        <p className="text-sm sm:text-base sm:w-[350px] lg:w-[400px] text-justify">Visionary leader with over 20 years of experience in the hospitality industry, driving innovation and excellence to deliver exceptional guest experiences. Committed to sustainable practices and team development.</p>
                        <span className="font-zig text-xl underline mt-4 self-end">David</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                    {team.map((t, id) => (
                        <div data-aos='fade-up' key={id} className="flex shadow-custom gap-6 sm:w-[300px] h-[400px] clippath-br overflow-hidden p-8 relative bg-white items-end">
                            <img src={t.image} className="object-cover left-[-2rem] top-[-2rem] absolute w-[225px] h-[225px] rounded-[50%]" alt="" />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl">{t.name}</h3>
                                <p className="text-sm underline text-[rgba(0,0,0,0.75)] mb-1">({t.designation})</p>
                                <p className="text-[rgba(0,0,0,0.75)]">{t.about}</p>
                                <span className="font-zig text-xl self-end mt-4 underline">{t.sign}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
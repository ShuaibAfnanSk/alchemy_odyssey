import subscribe from "../assets/subscribe.png";

const Subscribe = () => {

    return (
        <section className="flex flex-col items-center justify-center gap-8 h-[100vh]">
            <img src={subscribe} className="w-[300px] h-[300px]" alt="img" fill />
            <div className="flex flex-col gap-8 items-center">
                <h3 className="text-4xl">Newsletter</h3>
                <p className="text-center w-[300px]">Subscribe to our newsletter and stay updated.</p>
                <div className="relative shadow-custom w-[325px] sm:w-[350px] pl-4 sm:pl-6 pr-2 rounded-[3rem] flex items-center justify-between h-[50px] bg-white">
                    <input required type="email" name="" className="" id="" placeholder="enter your email" />
                    <button className="button">Subscribe</button>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
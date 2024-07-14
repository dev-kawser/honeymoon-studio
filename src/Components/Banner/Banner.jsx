import img1 from "../../assets/images/bannerimg1.png"
import img2 from "../../assets/images/bannerimg2.png"
import img3 from "../../assets/images/bannerimg3.png"
import img4 from "../../assets/images/bannerimg4.png"
import img5 from "../../assets/images/bannerimg5.png"

const Banner = () => {
    return (
        <div className="min-h-screen lg:mt-16 mt-10">
            <div>
                <div className="flex lg:flex-row flex-col gap-3">
                    <h1 className="lg:text-7xl text-3xl righteous uppercase lg:w-2/3  tracking-wider">
                        Your Photographer, <br />
                        Wedding Planner <br />
                        Event MAnagement
                    </h1>
                    <p className="lg:w-1/3  josefin lg:text-xl text-lg">
                        Life is journey is an ongoing process, and our subscription ensures you have a reliable partner every step of the way. Regular sessions keep you accountable and motivated for sustained progress.
                    </p>
                </div>
                <div className="mt-10 grid lg:grid-cols-6 grid-cols-3">
                    <div>
                        <img src={img1} alt="" />
                        <p className="josefin p-1 uppercase lg:text-base text-sm">wedding</p>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <p className="josefin p-1 uppercase lg:text-base text-sm">pre wedding</p>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <p className="josefin p-1 uppercase lg:text-base text-sm">outdoor</p>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                        <p className="josefin p-1 uppercase lg:text-base text-sm">events</p>
                    </div>
                    <div>
                        <img src={img5} alt="" />
                        <p className="josefin p-1 uppercase lg:text-base text-sm">artistic</p>
                    </div>
                    <div>
                        <img src={img1} alt="" />
                        <p className="josefin p-1 uppercase lg:text-base text-sm">wedding</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
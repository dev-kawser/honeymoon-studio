import img1 from "../../assets/images/recentimg1.png"
import img2 from "../../assets/images/recentimg2.png"
import img3 from "../../assets/images/recentimg3.png"
import img4 from "../../assets/images/recentimg4.png"

const RecentWorks = () => {
    return (
        <div className="lg:mt-16 mt-7">
            <div className="text-center">
                <h1 className="righteous lg:text-6xl text-4xl">
                    Recent Works
                </h1>
                <p className="lg:text-xl text-lg josefin mt-2 max-w-2xl mx-auto">
                    Etiam eget sem sit amet nisi viverra iaculis non vulputate mi. Etiam viverra et ante id laoreet. Etiam eget sem sit amet nisi viverra iaculis non vulputate mi. Etiam viverra et ante id laoreet.
                </p>
            </div>
            <div className="mt-10 grid lg:grid-cols-3 gap-10">
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" className="pt-10" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RecentWorks;
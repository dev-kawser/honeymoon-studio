import img1 from "../../assets/images/partnerimg1.png"
import img2 from "../../assets/images/partnerimg2.png"

const Partner = () => {
    return (
        <div className="lg:mt-16 mt-10 flex lg:flex-row gap-4 flex-col items-center justify-between">
            <div>
                <div>
                    <h2 className="righteous lg:text-6xl text-4xl lg:text-start text-center">reliable partner</h2>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-2 mt-5">
                    <p className="max-w-[400px] josefin lg:text-xl text-lg">Quisque egestas sem sed velit rutrum ultricies. Ut bibendum odio nec lacus vestibulum, eu imperdiet massa semper. Suspendisse egestas ipsum vitae mauris malesuada, id tincidunt tellus interdum. </p>

                    <p className="max-w-[400px] josefin lg:text-xl text-lg">Quisque egestas sem sed velit rutrum ultricies. Ut bibendum odio nec lacus vestibulum, eu imperdiet massa semper. Suspendisse egestas ipsum vitae mauris malesuada, id tincidunt tellus interdum. </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 items-baseline">
                <img src={img2} alt="" className="lg:ml-28 rounded lg:block hidden" />
                <img src={img1} alt="" className="rounded-lg" />
            </div>
        </div>
    );
};

export default Partner;
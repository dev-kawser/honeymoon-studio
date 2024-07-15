import img1 from "../../assets/images/appintmentimg1.png"
import img2 from "../../assets/images/appintmentimg2.png"

const Appointment = () => {
    return (
        <div className="lg:mt-20 mt-14">
            <div className="flex items-center justify-center">
                <div>
                    <img src={img1} alt="" className="lg:w-full w-24 lg:flex hidden" />
                </div>
                <div className="lg:w-2/3 w-full lg:h-[600px] h-72 bg-white rounded p-12">
                    <h1 className="text-center righteous text-2xl lg:text-6xl">
                        Book An Appointment
                    </h1>
                    <form className="space-y-3 mt-14 josefin">

                        <div className="relative">
                            <input className="peer w-full border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44' />
                            <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                Name
                            </label>
                        </div>

                        <div className="relative">
                            <input className="peer w-full border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="email" id='navigate_ui_input_44' />
                            <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                Email
                            </label>
                        </div>

                        <label htmlFor="message" className="block mb-2 text-sm text-gray-900 dark:text-gray-400">Message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full rounded-lg text-blue-400 border-b border-black outline-none"></textarea>

                        <input className="w-full lg:text-base text-xs py-2 text-center bg-[#252525] text-white mt-10" type="button" value="Book a Free Consultation" />
                    </form>

                    <p className="mt-12 josefin text-lg lg:flex hidden">
                        Life is journey is an ongoing process, and our subscription ensures you have a reliable partner every step of the way. Regular sessions keep you accountable and motivated for sustained progress.
                    </p>
                </div>
                <div>
                    <img src={img2} alt="" className="lg:w-full w-24 lg:flex hidden" />
                </div>
            </div>
        </div>
    );
};

export default Appointment;


const Discount = () => {
    return (
        <div className="lg:mt-10 mt-7 bg-[#E1B881] p-6 lg:p-12 lg:rounded-none rounded-md">
            <div className="flex lg:flex-row flex-col gap-2 justify-between">
                <div>
                    <h3 className="righteous text-2xl lg:text-5xl">
                        Grab a Discount
                    </h3>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 ">
                    <p className="max-w-[500px] josefin text-lg lg:text-xl text-black">
                        Aenean vestibulum purus mattis rutrum tempus. Vestibulum id diam cursus, venenatis metus in, molestie erat. Etiam eget sem sit amet nisi viverra iaculis non vulputate mi.
                    </p>
                    <button className="btn px-12 bg-black hover:text-black text-white roboto tracking-wider">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discount;
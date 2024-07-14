const Navbar = () => {

    const links =

        <>
            <li><a>Home</a></li>
            <li><a>Courses</a></li>
            <li><a>Blog</a></li>
            <li><a>Offers</a></li>
        </>

    return (
        <div className="shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-1">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className=" flex flex-col items-center">
                            <a className="p-2 ribeye uppercase lg:text-3xl text-xl">Honeymoon</a>
                            <p className="roboto uppercase -mt-2 tracking-widest lg:tracking-[12px] lg:text-2xl text-lg">studio</p>
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 josefin text-black uppercase tracking-wider text-lg">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-10 w-40 p-2 shadow josefin text-black uppercase">
                        {
                            links
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

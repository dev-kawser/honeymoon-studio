

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#302626] text-white p-10 mt-10">
                <aside className="mx-auto">
                    <div className=" flex flex-col items-center">
                        <a className="p-2 ribeye uppercase lg:text-3xl text-xl">Honeymoon</a>
                        <p className="roboto uppercase -mt-2 tracking-widest lg:tracking-[12px] lg:text-2xl text-lg">studio</p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <aside className="footer-center bg-[#302626] text-white border-t p-4">
                <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;
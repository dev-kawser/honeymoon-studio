import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-[#F8F7F1]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
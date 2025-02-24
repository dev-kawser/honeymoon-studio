import Banner from "../../Components/Banner/Banner";
import Discount from "../../Components/Discount/Discount";
import RecentWorks from "../../Components/RecentWorks/RecentWorks";
import Message from "../../Components/Message/Message";
import Partner from "../../Components/Partner/Partner";
import Reviews from "../../Components/Reviews/Reviews";
import Appointment from "../../Components/Appointment/Appointment";


const Home = () => {
    return (
        <div className="container lg:mx-auto px-3">
            <Banner></Banner>
            <Discount></Discount>
            <RecentWorks></RecentWorks>
            <Message></Message>
            <Partner></Partner>
            <Reviews></Reviews>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;
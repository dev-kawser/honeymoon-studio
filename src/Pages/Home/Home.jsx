import Banner from "../../Components/Banner/Banner";
import Discount from "../../Components/Discount/Discount";
import RecentWorks from "../../Components/RecentWorks/RecentWorks";
import Message from "../../Components/Message/Message";
import Partner from "../../Components/Partner/Partner";


const Home = () => {
    return (
        <div className="container lg:mx-auto px-3">
            <Banner></Banner>
            <Discount></Discount>
            <RecentWorks></RecentWorks>
            <Message></Message>
            <Partner></Partner>
        </div>
    );
};

export default Home;
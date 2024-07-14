import Banner from "../../Components/Banner/Banner";
import Discount from "../../Components/Discount/Discount";
import RecentWorks from "../../Components/RecentWorks/RecentWorks";


const Home = () => {
    return (
        <div className="container lg:mx-auto px-3">
            <Banner></Banner>
            <Discount></Discount>
            <RecentWorks></RecentWorks>
        </div>
    );
};

export default Home;
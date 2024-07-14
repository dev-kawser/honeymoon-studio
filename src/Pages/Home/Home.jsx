import Banner from "../../Components/Banner/Banner";
import Discount from "../../Components/Discount/Discount";


const Home = () => {
    return (
        <div className="container lg:mx-auto px-3">
            <Banner></Banner>
            <Discount></Discount>
        </div>
    );
};

export default Home;
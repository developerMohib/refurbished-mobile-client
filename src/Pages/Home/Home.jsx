import Banner from "./Elements/Banner";
import Service from "./Elements/Service";
import Products from "./Elements/Products/Products";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Service/>
        </div>
    );
};

export default Home;
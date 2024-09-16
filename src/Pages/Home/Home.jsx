import Banner from "../../Component/Banner/Banner";
import Products from "../Home/Elements/Products";
import Service from "../../Component/Service/Service";
import MyAccordion from "../../Component/MyAccordion/MyAccordion";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Service />
      <MyAccordion />
    </div>
  );
};

export default Home;

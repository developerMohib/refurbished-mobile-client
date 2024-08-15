import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import { Carousel } from "flowbite-react";
const Contact = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={1500}>
        <img src={slider1} alt="Slide 1" />
        <img src={slider2} alt="Slide 2" />
        <img src={slider3} alt="Slide 3" />
        <img src={slider4} alt="Slide 4" />
        <img src={slider5} alt="Slide 5" />
      </Carousel>
    </div>
  );
};

export default Contact;

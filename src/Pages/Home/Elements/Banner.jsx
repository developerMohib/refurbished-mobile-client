import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { CiCircleCheck } from "react-icons/ci";
import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import slider4 from "../../../assets/slider4.png";
import slider5 from "../../../assets/slider5.png";
const Banner = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center md:w-1/2 md:pb-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            Refurbished <br />
            <span className="font-bold text-blue-500">Phone</span>
            <span className="text-xl font-semibold rounded-full text-blueGray-500 mx-1">
              fresh
            </span>
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover what goes into each refurbished iPhone. <br />
          </p>
          <button
            className="hover:underline text-blue-600"
            onClick={() => document.getElementById("my_modal").showModal()}
          >
            see more
          </button>
          <dialog id="my_modal" className="modal">
            <div className="modal-box md:w-[800px] box-border max-w-full">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-3xl text-center py-4 text-slate-900 ">
                What goes into a refurbished iPhone !
              </h3>
              <div className="px-3">
                <p className="py-4 text-slate-900">
                  High-quality materials and components in a refurbished iPhone
                  reduce its impact on the environment. All refurbished iPhone
                  models come with a new battery, a new outer shell, a one-year
                  limited warranty, and free delivery and returns.
                </p>
                <h4 className="text-slate-900 my-2">This also includes:</h4>
                <ul>
                  <li className="text-slate-900 flex items-center gap-2 text-base">
                    {" "}
                    <CiCircleCheck className="text-3xl" /> Full functional
                    testing, genuine Apple part replacements (if needed), and a
                    thorough cleaning
                  </li>
                  <li className="text-slate-900 flex items-center gap-3 text-base">
                    {" "}
                    <CiCircleCheck className="text-3xl" /> The original
                    operating system or a more recent version footnote *
                  </li>
                  <li className="text-slate-900 flex items-center gap-3 text-base">
                    {" "}
                    <CiCircleCheck className="text-3xl" /> All accessories and
                    cables repackaged in a brand-new box{" "}
                  </li>
                </ul>
                <small className="text-sm mt-10 text-slate-900">
                  * If your device is shipped with the original Operating
                  System, the most recent version can be downloaded for free
                  from the App Store.
                </small>
              </div>
            </div>
          </dialog>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to=" "
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Buying Phone
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to=""
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Selling Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center md:w-1/2 md:pb-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
          <div className="rounded-lg  text-black w-full">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slideInterval={1500}>
                <img src={slider1} alt="Slide 1" />
                <img src={slider2} alt="Slide 2" />
                <img src={slider3} alt="Slide 3" />
                <img src={slider4} alt="Slide 4" />
                <img src={slider5} alt="Slide 5" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

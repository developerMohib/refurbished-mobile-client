import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  const year = new Date();
  const fullYear = year.getFullYear();
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <Link className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Pro Version
                </Link>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Products</h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <Link to="/" className="text-gray-400 hover:text-white">
                  Figma UI System
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Icons Assets
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Responsive Blocks
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Components Library
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Plugin Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <Link to="/" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Quick Start
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  User Guide
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Plugin Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Support</h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <Link to="/" className="text-gray-400 hover:text-white">
                  Customer Support
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Cookies
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  License
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-gray-700 ">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
            <Link to="/" className="flex justify-center ">
              <svg
                className="w-40 h-8"
                viewBox="0 0 164 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5473 11.8941C25.1905 12.5063 25.2068 13.5149 24.5837 14.1468L18.7585 20.054C18.1354 20.686 17.1087 20.702 16.4654 20.0898C15.8222 19.4776 15.8059 18.469 16.429 17.8371L22.2542 11.9299C22.8773 11.2979 23.904 11.2819 24.5473 11.8941Z"
                  fill="url(#paint0_linear_9147_12012)"
                />
                <path
                  d="M0 4.54673C0 2.03564 2.07211 0 4.62819 0H21.5399V0.00124069C28.9908 0.0998525 35 6.06429 35 13.4075C35 20.8123 28.8897 26.8151 21.3523 26.8151C18.6648 26.8151 16.1587 26.052 14.0463 24.7342L6.58815 31.9057C4.13431 34.2652 0 32.5573 0 29.1841V4.54673ZM11.5194 22.7055C9.15709 20.295 7.70452 17.0179 7.70452 13.4075C7.70452 12.5277 8.43056 11.8144 9.32619 11.8144C10.2218 11.8144 10.9479 12.5277 10.9479 13.4075C10.9479 19.0526 15.6061 23.6288 21.3523 23.6288C27.0985 23.6288 31.7567 19.0526 31.7567 13.4075C31.7567 7.76248 27.0985 3.18626 21.3523 3.18626H4.62819C3.86336 3.18626 3.24334 3.79536 3.24334 4.54673V29.1841C3.24334 29.7351 3.91866 30.014 4.31948 29.6286L11.5194 22.7055Z"
                  fill="url(#paint1_linear_9147_12012)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9147_12012"
                    x1="35"
                    y1="1.89063"
                    x2="1.11152"
                    y2="33.4573"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7C3AED" />
                    <stop offset="0.993738" stopColor="#4F46E5" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_9147_12012"
                    x1="35"
                    y1="1.89063"
                    x2="1.11152"
                    y2="33.4573"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7C3AED" />
                    <stop offset="0.993738" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <span className="text-gray-400  block">
              &copy; <Link to="/"> Be smart with phone </Link> {fullYear}, All
              rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
              <Link
                to="/"
                className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
              >
                <IoLogoInstagram className="text-white text-xl" />
              </Link>
              <Link
                to="/"
                className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
              >
                <FaLinkedinIn className="text-white text-xl" />
              </Link>
              <Link
                to="/"
                className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
              >
                <FaXTwitter className="text-white text-xl" />
              </Link>
              <Link
                to="/"
                className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
              >
                <FaFacebook className="text-white text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

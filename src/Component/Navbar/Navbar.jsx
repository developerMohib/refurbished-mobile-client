import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // log out function
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("log out successfully");
      window.location.reload();
      navigate("/", { replace: true });
    });
  };

  const navbarLinks = (
    <>
      <li>
        <Link
          to="/new-phone"
          className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
        >
          New Phone
        </Link>
      </li>
      <li>
        <Link
          to="/refurbished"
          className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
        >
          Refurbished Phone
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
        >
          Blog
        </Link>
      </li>
    </>
  );
  const searchBox = (
    <>
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
        placeholder="Search"
      />
    </>
  );
  const loginUser = (
    <>
      {user ? (
        <>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                src={user?.photoURL}
              />
            </div>
          </div>
          <Tooltip id="my-tooltip" />
          <IoMdLogOut
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Log Out!"
            className="text-2xl cursor-pointer mx-2"
            onClick={handleLogOut}
          />
        </>
      ) : (
        <Link to="/login">
          {" "}
          <FaUser
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Log In !"
            className="text-xl mx-1"
          />{" "}
        </Link>
      )}
    </>
  );

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="relative py-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link title="Refurbished Phohe" href="#">
                <div className="relative">
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
                  <span className="absolute left-1/4 top-0 font-semibold">
                    {" "}
                    R. PHONE{" "}
                  </span>
                </div>
              </Link>
              <div className="flex items-center -mr-2 md:hidden">
                {searchBox}

                <button
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <div className="drawer z-50 ">
                    <input
                      id="my-drawer"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content">
                      {/* Page content here */}
                      <label htmlFor="my-drawer" className="drawer-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-6 h-6 text-black "
                        >
                          <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </label>
                    </div>

                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu bg-base-200 text-base-content min-h-full flex  w-80 p-4">
                        {/* Sidebar content here */}
                        {navbarLinks}
                        {loginUser}
                      </ul>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10 list-none">
            {navbarLinks}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex items-center rounded-full">
              <div>{searchBox}</div>
              <div>
                <div className="inline-flex items-center px-4 py-2">
                  <Link>
                    {" "}
                    <MdOutlineShoppingBag className="text-2xl mx-1" />{" "}
                  </Link>
                  {loginUser}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

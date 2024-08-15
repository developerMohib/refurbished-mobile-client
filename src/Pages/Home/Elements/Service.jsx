import { Link } from "react-router-dom";
import { RxMobile } from "react-icons/rx";
import { ImSpinner10 } from "react-icons/im";
import { CiDeliveryTruck } from "react-icons/ci";
const Service = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-12 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 border rounded-lg shadow p-4 md:p-6 text-center">
          <div className="flex flex-wrap flex-col items-center justify-center px-1 md:px-6">
            <ImSpinner10 className="text-5xl" />
            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
              Why Refurbished 1
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Every product undergoes a rigorous certification process.
            </p>
            <Link className="text-blue-600" to="/">
              Learn More
            </Link>
          </div>

          <div className="flex flex-wrap flex-col items-center justify-center px-6">
            <RxMobile className="text-5xl" />
            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
              Phone Care
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
            Service and support for your refurbished Apple products.
            </p>
            <Link className="text-blue-600" to="/">
              Learn More
            </Link>
          </div>

          <div className="flex flex-wrap flex-col items-center justify-center px-6">
            <CiDeliveryTruck className="text-5xl" />

            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
            Free next-day delivery
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
            On select in-stock Apple products ordered by 5:00 p.m.
            </p>
            <Link className="text-blue-600" to="/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

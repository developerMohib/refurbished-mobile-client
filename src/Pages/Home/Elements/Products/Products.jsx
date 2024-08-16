import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import Loader from "../../../../Component/Loader/Loader";
import useAllProducts from "../../../../Hooks/useAllProducts";

const Products = () => {
  const [value, setValue] = useState(500);
  const { loading } = useAuth();
  const { products, isLoading } = useAllProducts();
  const handlePrice = (e) => {
    console.log("value ", e.target.value);
    setValue(e.target.value);
  };
  if (isLoading || loading) {
    <Loader />;
  }
  return (
    <div className="px-4">
      {/* test */}
      <div className="md:grid grid-cols-3 gap-5 my-10">
        {/* Price Range Here */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-5">
            <div className="grid-cols-1 border border-slate-400 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
                <div className="mb-4">
                  <label
                    htmlFor="price-range"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Price Range
                  </label>
                  <input
                    onChange={handlePrice}
                    type="range"
                    id="price-range"
                    className="w-full accent-indigo-600"
                    min="7000"
                    max="100000"
                    value={value}
                  />
                </div>
                <div className="flex justify-between text-gray-500">
                  <span id="minPrice">7000</span>
                  <span id="maxPrice">{value}</span>
                </div>
              </div>
            </div>

            <div className="grid-cols-1 shadow-md border border-slate-400 p-4">
              {/* Brand Filter */}
              <div className="">
                <select
                  name="Brand"
                  id="brand"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                >
                  <option value="">Brand</option>
                  <option value="iphone">Iphone</option>
                  <option value="readmi">Readmi</option>
                  <option value="vivo">Vivo</option>
                  <option value="oppo">Oppo</option>
                </select>
              </div>
              {/* Category FIlter */}
              <div className="">
                <select
                  name="Brand"
                  id="brand"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                >
                  <option value="">Brand</option>
                  <option value="iphone">Iphone</option>
                  <option value="readmi">Readmi</option>
                  <option value="vivo">Vivo</option>
                  <option value="oppo">Oppo</option>
                </select>
              </div>
              {/* Sorting */}
              <div className="flex items-center">
                <select
                  name="Price"
                  id="Price"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                >
                  <option value="">Default</option>
                  <option value="HL">Latest Phone</option>
                  <option value="HL">High to low</option>
                  <option value="LH">Low to high</option>
                </select>
              </div>

              <button className="w-full bg-green-500 mt-5 ">Find Phone</button>
            </div>
          </div>
        </div>

        {/* Here Latest Phone */}

        <div className="grid-cols-1 border border-slate-400 p-4">
          <div>
            <h1> Latest Phone</h1>
          </div>
        </div>
      </div>
      {/* test */}

      <div className="grid grid-cols-4 gap-4">
        <div className="grid-cols-1">
          {/* for designing category filtering */}
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Models </Accordion.Title>
              <Accordion.Content>
                <ul className="">
                  <p>
                    <Link> Iphone 15</Link>
                  </p>
                  <p>
                    <Link> Iphone 14</Link>
                  </p>
                  <p>
                    <Link> Iphone 13</Link>
                  </p>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Is there a Figma file available?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What are the differences between Flowbite and Tailwind UI?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          {/* for designing category filtering */}
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {products?.map((product) => (
              <div key={product._id} className="col-span-1">
                <Link
                to="/"
                  className="relative block rounded-tr-3xl border border-gray-100"
                >
                  <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-3 py-2 font-medium uppercase tracking-widest text-white">
                    Save 10%
                  </span>

                  <img
                    src={product.productImage}
                    alt=""
                    className="h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
                  />

                  <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900">
                      {product.productName}
                    </strong>

                    <p className="mt-2 text-pretty text-gray-700">
                    {product.description.slice(0, 70)}
                    </p>
                    <p className="mt-2 text-pretty text-gray-700">
                    Price : {product.price} BDT
                    </p>

                    <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
                      More
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

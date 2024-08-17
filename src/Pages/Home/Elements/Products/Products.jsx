import "./products.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import Loader from "../../../../Component/Loader/Loader";
import { CiSearch } from "react-icons/ci";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

import { Pagination } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [value, setValue] = useState();
  const [priceValue, setPriceValue] = useState(7000);
  const [pName, setPName] = useState("");
  const [products, setProducts] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  console.log("currentPage ", currentPage);
  const { data: productsCount = {} } = useQuery({
    queryKey: ["productC"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/productCount");
        const { count } = res.data;

        // Return the object with count if it exists, otherwise an empty object
        return count !== undefined ? { count } : {};
      } catch (error) {
        console.error("Error fetching products:", error);
        return {}; // Return an empty object in case of an error
      }
    },
  });

  const totalProduct = productsCount?.count || 0; // Ensure it defaults to 0 if undefined
  const itemPerPage = 3;
  const numberOfPage = Math.ceil(totalProduct / itemPerPage);

  // const { isLoading } = useAllProducts();

  const handlePrice = (e) => {
    console.log("value ", e.target.value);
    setPriceValue(e.target.value);
  };

  const handleSearch = async () => {
    const name = pName;
    try {
      const response = await axiosPublic.get(`/some-products`, {
        params: { productName: name },
      });
      // console.log('Search results:', response.data);
      // You can update your state here with the search results if needed
      setProducts(response.data);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const handleBrand = (e) => {
    console.log(" amare paico ", e.target.value);
  };

  // handle sort products

  useEffect(() => {
    const handleSort = async () => {
      try {
        const res = await axiosPublic.get("/products", {
          params: {
            sort: value, // Sending 'sort' as a query parameter
          },
        });
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleSort();
  }, [axiosPublic, value]);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 300;
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPublic.get(
          `/productpage?page=${currentPage}&size=${itemPerPage}`
        );
        setProducts(response.data); // Assuming response.data is the data you want
      } catch (err) {
        console.error("Error fetching data:", err);
        setProducts([]); // Optionally reset data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic, currentPage, itemPerPage]);

  if (loading || isLoading) {
    return <Loader />;
  }
  if (products.length === 0) {
    return <div>No products found.</div>; // Optional: handle empty data case
  }

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="px-4">
      {/* test */}
      <div
        className={`md:grid grid-cols-3 gap-5 my-10 bg-gray-200 w-full z-50 sticky-section ${
          isSticky ? "is-sticky" : ""
        } `}
      >
        {/* Price Range Here */}
        <div className="col-span-2">
          <div className="md:grid grid-cols-2 my-2 gap-5">
            <div className="grid-cols-1 border border-slate-400 p-4">
              <div className="bg-white rounded-lg shadow-lg px-6 w-full max-w-md">
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
                    value={priceValue}
                  />
                </div>
                <div className="flex justify-between text-gray-500">
                  <span id="minPrice">7000</span>
                  <span id="maxPrice">{priceValue}</span>
                </div>
              </div>
            </div>

            <div className="grid-cols-1 shadow-md border border-slate-400 p-4">
              <div className="md:flex gap-3">
                {/* Brand Filter */}
                <div className="md:w-1/2">
                  <select
                    name="Category"
                    id="category"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">Category</option>
                    <option value="basic">Basic</option>
                    <option value="feature-phone">Feature Phone</option>
                    <option value="smartphone">Smartphone</option>
                  </select>
                </div>
                {/* Category FIlter */}
                <div className="md:w-1/2">
                  <select
                    onChange={handleBrand}
                    name="Brand"
                    id="brand"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">Brand</option>
                    <option value="iphone">Iphone</option>
                    <option value="redmi">Redmi</option>
                    <option value="vivo">Vivo</option>
                    <option value="oppo">Oppo</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-green-500 mt-5 ">Find Phone</button>
            </div>
          </div>
        </div>

        {/* Sorting */}
        <div className="grid-cols-1 border border-slate-400 px-4">
          <div className="flex items-center">
            <select
              onChange={(e) => setValue(e.target.value)}
              name="Price"
              id="Price"
              className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            >
              <option value=" ">Default</option>
              <option value="newest">Latest Phone</option>
              <option value="highlow">High to low</option>
              <option value="lowhigh">Low to high</option>
            </select>
          </div>

          <div className="relative">
            <input
              onChange={(e) => setPName(e.target.value)}
              type="text"
              className="w-full mt-1 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 relative"
              placeholder="Search"
            />
            <button
              className="absolute right-0 px-4 py-1 btn "
              onClick={handleSearch}
            >
              {" "}
              <CiSearch className="text-2xl" />{" "}
            </button>
          </div>
        </div>
      </div>
      {/* test */}

      <div className="md:grid grid-cols-4 gap-4">
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
          <div className="md:grid grid-cols-3 gap-4">
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
                    <small className="mt-2 text-pretty text-sm text-gray-700">
                      Release Date : {product.productCreationDateTime}
                    </small>

                    <span className="mt-4 block rounded-md border border-indigo-900 bg-green-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
                      More
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={numberOfPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Products;

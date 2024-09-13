import "./products.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Accordion } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import Loader from "../../../../Component/Loader/Loader";
import { useCallback, useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

import { Pagination } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import ProdCom from "./ProdCom";

const Products = () => {
  const { loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [value, setValue] = useState();
  const [pName, setPName] = useState("");

  const [products, setProducts] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);
  
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const { data: productsCount = {} } = useQuery({
    queryKey: ["productC"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/productCount");

        const { count } = res.data;
        console.log('res pagi', count)

        // Return the object with count if it exists, otherwise an empty object
        return count !== undefined ? { count } : {};
      } catch (error) {
        console.error("Error fetching products:", error);
        return {}; // Return an empty object in case of an error
      }
    },
  });

  const totalProduct = productsCount?.count || 0; // Ensure it defaults to 0 if undefined
  const itemPerPage = 6;
  const numberOfPage = Math.ceil(totalProduct / itemPerPage);

  const fetchProducts = useCallback(
    async (params = {}) => {
      try {
        const response = await axiosPublic.get("/products", { params });
        console.log('response data',response.data)
        setProducts(response.data);
      } catch (error) {
        console.error("Error during API request:", error);
      }
    },
    [axiosPublic]
  );
  
  // Find Phone with category, brand, price range
  const handleFindPhone = () => {
    const params = {
      // list
      price: priceRange,
      brand: brand,
      category: category,
    };
    // console.log('params ', params )
    fetchProducts(params);
  };
  // Search Product according to name
  const handleSearch = useCallback(() => {
    const params = {
      productName: pName,
      page: currentPage,
      size: itemPerPage,
    };
    fetchProducts(params);
  }, [pName, currentPage, itemPerPage, fetchProducts]);

  const handleSort = useCallback(() => {
    const params = {
      sort: value,
      productName: pName,
      page: currentPage,
      size: itemPerPage,
    };
    fetchProducts(params);
  }, [value, pName, currentPage, itemPerPage, fetchProducts]);

  useEffect(() => {
    if (pName) {
      handleSearch(); // Only if there's a search term
    } else {
      handleSort(); // Otherwise, handle sorting
    }
  }, [value, pName, currentPage, handleSearch, handleSort]);

  // To make menu of this web appliction.
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
            <div className="grid-cols-1 border border-slate-400 pt-2">
              <div className="bg-white rounded-lg px-6 w-full max-w-md">
                <div className="">
                  <label
                    htmlFor="price-range"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Price Range
                  </label>
                  <input
                    onChange={(e) => setPriceRange(e.target.value)}
                    type="range"
                    id="price-range"
                    className="w-full accent-indigo-600 pt-2"
                    min="10"
                    max="250000"
                    value={priceRange}
                  />
                </div>
                <div className="flex justify-between text-gray-500">
                  <span id="minPrice">10</span>
                  <span id="maxPrice">{priceRange}</span>
                </div>
              </div>
            </div>

            <div className="grid-cols-1 shadow-md border border-slate-400 p-4">
              <div className="md:flex gap-3">
                {/* Brand Filter */}
                <div className="md:w-1/2">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    name="Category"
                    id="category"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">Category</option>
                    <option value="basic">Basic</option>
                    <option value="features phone">Feature Phone</option>
                    <option value="smartphone">Smartphone</option>
                  </select>
                </div>
                {/* Category FIlter */}
                <div className="md:w-1/2">
                  <select
                    onChange={(e) => setBrand(e.target.value)}
                    name="Brand"
                    id="brand"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">Brand Name </option>
                    <option value="Iphone">Iphone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Redmi">Redmi</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Huawei">Huawei</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleFindPhone}
                className="w-full bg-green-500 text-white mt-5 "
              >
                Find Phone
              </button>
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
            {products?.length > 0 ? (
              products?.map((product) => (
                <ProdCom key={product._id} product={product} />
              ))
            ) : (
              <div className="col-span-3 text-center p-10">
                <p className="text-lg font-semibold text-gray-700">
                  No products available
                </p>
              </div>
            )}
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

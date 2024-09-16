import { useEffect, useState } from "react";

const Selection = () => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const handleFindPhone = () => {
    const params = {
      // list
      price: priceRange,
      brand: brand,
      category: category,
    };
    // console.log('params ', params )
  };
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

  const [price, setPrice] = useState(500); // Initial price set to 500

  const updatePrice = (value) => {
    setPrice(value);
  };

  return (
    <div className="p-4 md:grid grid-cols-5 gap-5">
      <div className="col-span-3 md:flex gap-3">
        {/* Brand Filter */}
        <div className="">
          <select
            onChange={(e) => setCategory(e.target.value)}
            name="Category"
            id="category"
            className="h-full w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Category</option>
            <option value="basic">Basic</option>
            <option value="features phone">Feature Phone</option>
            <option value="smartphone">Smartphone</option>
          </select>
        </div>

        {/* Category FIlter */}
        <div className="md:my-0 my-3">
          <select
            onChange={(e) => setBrand(e.target.value)}
            name="Brand"
            id="brand"
            className="h-full w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
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

        {/* price range */}
        <div className="bg-white rounded-lg shadow-lg px-6 md:w-1/3">
          <div className="">
            <input
              type="range"
              id="price-range"
              className="w-full"
              min="0"
              max="1000"
              value={price}
              onInput={(e) => updatePrice(e.target.value)}
            />
          </div>
          <div className="flex justify-between text-gray-500">
            <span id="minPrice">${price}</span>
            <span id="maxPrice">$1000</span>
          </div>
        </div>
        <div className="md:text-left text-center md:mb-0 mb-3">
          <button className="bg-green-500 md:mt-0 mt-3 h-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Find Phone
          </button>
        </div>
      </div>

      <div className="col-span-2 md:flex gap-5 ">
        {/* sorting */}
        <div className="">
          <select
            onChange={(e) => setCategory(e.target.value)}
            name="Category"
            id="category"
            className="h-full w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Sorting</option>
            <option value="hightolow">Highest to lowest</option>
            <option value="lowtohigh">Lowest to highesh </option>
          </select>
        </div>

        {/* searching */}
        <div className="flex relative rounded-md px-4">
          <input
            type="text"
            name="q"
            id="query"
            placeholder="Type phone name"
            className="w-full p-3 rounded-md border-r-white rounded-r-none border-gray-300 dark:placeholder-gray-300 dark:bg-gray-500 dark:text-gray-300 dark:border-none "
          />
          <button className="inline-flex items-center gap-2 bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
            <span className="block">
              <svg
                className="text-gray-200 h-5 w-5 p-0 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selection;

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
  return (
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
  );
};

export default Selection;

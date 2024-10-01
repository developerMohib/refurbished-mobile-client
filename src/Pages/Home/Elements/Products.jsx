import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAllProducts from "../../../Hooks/useAllProducts";
import Loader from "../../../Component/Loader/Loader";
import ProdCom from "./ProdCom";
import Selection from "../../../Component/Selection/Selection";
import MyPagination from "../../../Component/MyPagination/MyPagination";
import "./products.css";

const Products = () => {
  const itemsPerPage = 8;
  const { loading } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSoriting] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(10000);
  // console.log("search", category);
  // console.log("brand", brand);
  console.log("search", search);

  const handleFindPhone = () => {
    const params = {
      // list
      price: price,
      brand: brand,
      category: category,
    };
    console.log("params ", params);
  };

  // Fetch products for the current page
  const { products, isLoading } = useAllProducts(
    currentPage,
    itemsPerPage,
    sorting,
    search
  );

  // Handle page change for pagination
  const onPageChange = (page) => setCurrentPage(page);

  // If data is loading, show loader
  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4">
      {/* Selection Component */}
      <div className="my-10 bg-gray-200 w-full sticky-section">
        <Selection
          setBrand={setBrand}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          sorting={sorting}
          setSoriting={setSoriting}
          search={search}
          setSearch={setSearch}
          handleFindPhone={handleFindPhone}
        />
      </div>

      {/* Products Grid */}
      <div className="md:grid grid-cols-4 gap-4">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProdCom key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-4 text-center p-10">
            <p className="text-lg font-semibold text-gray-700">
              No products available
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <MyPagination
          onPageChange={onPageChange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default Products;

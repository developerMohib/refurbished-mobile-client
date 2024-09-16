import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAllProducts from "../../../Hooks/useAllProducts";
import Loader from "../../../Component/Loader/Loader";
import ProdCom from "./ProdCom";
import Selection from "../../../Component/Selection/Selection";
import MyPagination from "../../../Component/MyPagination/MyPagination";
import "./products.css";

const Products = () => {
  const itemsPerPage = 8; // Fixed the typo from "itemPerPage" to "itemsPerPage"
  const { loading } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products for the current page
  const { products, isLoading } = useAllProducts(currentPage);

  // Handle page change for pagination
  const onPageChange = (page) => setCurrentPage(page);

  // If data is loading, show loader
  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4">
      {/* Selection Component */}
      <div className="md:grid grid-cols-3 gap-5 my-10 bg-gray-200 w-full sticky-section">
        <Selection />
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

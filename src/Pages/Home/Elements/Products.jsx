import { useEffect, useState } from "react";

import useAuth from "../../../Hooks/useAuth";
import useAllProducts from "../../../Hooks/useAllProducts";

import Loader from "../../../Component/Loader/Loader";
import ProdCom from "./ProdCom";
import Selection from "../../../Component/Selection/Selection";
import MyPagination from "../../../Component/MyPagination/MyPagination";

import "./products.css";

const Products = () => {
  const { loading } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const { products, isLoading } = useAllProducts(currentPage);

  useEffect(() => {}, [currentPage]);

  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4">
      {/* test */}
      <div
        className={`md:grid grid-cols-3 gap-5 my-10 bg-gray-200 w-full z-50 sticky-section `}
      >
        <Selection />
      </div>

      <div className="md:grid grid-cols-4 gap-4">
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
      {/* pagination */}
      <div>
        <MyPagination
          onPageChange={onPageChange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Products;

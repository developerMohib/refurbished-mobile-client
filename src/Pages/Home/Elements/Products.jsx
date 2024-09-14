import "./products.css";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Component/Loader/Loader";
import { useState } from "react";
import { Pagination } from "flowbite-react";
import ProdCom from "./ProdCom";
import useAllProducts from "../../../Hooks/useAllProducts";
import MyAccordion from "../../../Component/MyAccordion/MyAccordion";
import Selection from "../../../Component/Selection/Selection";

const Products = () => {
  const { loading } = useAuth();
  const { products } = useAllProducts();
  const [currentPage, setCurrentPage] = useState(1);
  console.log('products',products)

  if (loading) {
    return <Loader />;
  }
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="px-4">
      {/* test */}
      <div
        className={`md:grid grid-cols-3 gap-5 my-10 bg-gray-200 w-full z-50 sticky-section `}
      >
        <Selection />
      </div>
      {/* test */}

      <div className="md:grid grid-cols-4 gap-4">
        <div className="grid-cols-1">
          {/* for designing category filtering */}
          <MyAccordion />

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
          totalPages={""}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Products;

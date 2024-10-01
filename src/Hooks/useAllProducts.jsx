import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = (page = 1, size, sorting, search,searchParams={}) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", page, size, sorting, search,searchParams],
    queryFn: async () => {
      const queryParams = new URLSearchParams({
        page,
        size,
        sort: sorting,
        productName: search,
        ...searchParams, // Spread searchParams to include them in the query
      }).toString();

      // Construct the API URL with queryParams
      const url = `/products?${queryParams}`;
      // here getting data
      try {
        const res = await axiosPublic.get(url);;
        return res.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  });
  return { products, isLoading, refetch };
};

export default useAllProducts;

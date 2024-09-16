import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = (page = 1, size) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", page, size],
    queryFn: async () => {
      // here getting data
      try {
        const res = await axiosPublic.get(
          `/products?page=${page}&size=${size}`
        );
        return res.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  });
  return { products, isLoading, refetch };
};

export default useAllProducts;

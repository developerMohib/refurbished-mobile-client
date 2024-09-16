import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = (page = 1, size, sorting) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", page, size,sorting],
    queryFn: async () => {
      // here getting data
      try {
        const res = await axiosPublic.get(
          `/products?page=${page}&size=${size}&sort=${sorting}`
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

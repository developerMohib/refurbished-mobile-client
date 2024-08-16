import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = () => {
    const axiosPublic = useAxiosPublic();
    const {data:products = [ ], isLoading, refetch} = useQuery({
        queryKey : ['product'],
        queryFn: async () =>{
            // here getting data
            try {
                const res = await axiosPublic('/products');                
                return res.data.data;
              } catch (error) {
                console.error('Error fetching products:', error);
              }
        }
    })
    return {products, isLoading, refetch}
};

export default useAllProducts;
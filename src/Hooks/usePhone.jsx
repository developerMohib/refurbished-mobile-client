import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePhone = () => {
  const axiosPublic = useAxiosPublic();

  const { data: phones = [], isLoading } = useQuery({
    queryKey: ["newMobile"],
    queryFn: async () => {
      const res = await axiosPublic.get("/new-phone");
      return res?.data;
    },
  });

  return { phones, isLoading };
};

export default usePhone;

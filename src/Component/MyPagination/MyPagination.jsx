import { useQuery } from "@tanstack/react-query";
import { Pagination } from "flowbite-react";
import PropTypes from "prop-types";

import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MyPagination = ({ onPageChange, currentPage, setCurrentPage }) => {
  onPageChange = (page) => setCurrentPage(page);
  const axiosPublic = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/productCount");
        const count = res?.data;
        return count !== undefined ? { count } : {};
      } catch (error) {
        console.log(error);
      }
    },
  });
  const totalProduct = data?.count?.count || 0;
  // page per item
  const numberOfPage = Math?.ceil(totalProduct / 6);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={numberOfPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

MyPagination.propTypes = {
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.number,
};

export default MyPagination;

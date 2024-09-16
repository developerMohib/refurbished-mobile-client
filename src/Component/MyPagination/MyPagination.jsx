import { Pagination } from "flowbite-react";
import { useState } from "react";

const MyPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);
    return (
        <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={""}
          onPageChange={onPageChange}
        />
      </div>
    );
};

export default MyPagination;
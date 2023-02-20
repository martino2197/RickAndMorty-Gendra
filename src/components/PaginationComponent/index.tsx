import { Pagination } from "@mui/material";
import usePagination from "../../utils/Hooks/usePagination";

const PER_PAGE = 20;

const PaginationComponent = ({ pageNumber, count, updatePageNumber }: any) => {
  const _DATA = usePagination(count, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    updatePageNumber(p);
    _DATA.jump(p);
  };

  return (
    <div className="mt-8 mb-8">
      <Pagination
        size="large"
        count={count}
        page={pageNumber}
        variant="text"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationComponent;

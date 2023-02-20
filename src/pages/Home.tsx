import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import PaginationComponent from "../components/PaginationComponent";
import Search from "../components/Search";
import { useFetch } from "../utils/Hooks/useFetch";
import { DataApi } from "../utils/types";

const Home = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [search, setSearch] = useState("");

  const filterState = {
    gender,
    updateGender,
    status,
    updateStatus,
    species,
    updateSpecies,
  };

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  const {
    data: fetchedData,
    loading,
    error,
  }: {
    data: DataApi;
    loading: boolean | null;
    error: string | null;
  } = useFetch(api);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <div className="flex justify-center">
          <div className="">
            <Filter
              pageNumber={pageNumber}
              filterState={filterState}
              updatePageNumber={updatePageNumber}
            />
            {loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                {fetchedData && (
                  <div className="flex flex-col justify-center items-center w-full">
                    <div className="grid grid-cols-1  gap-x-12 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-16 md:px-16 lg:px-32 xl:px-64 2xl:px-96">
                      <Card page="/" results={fetchedData.results} />
                    </div>
                    <PaginationComponent
                      count={fetchedData.info.count}
                      pageNumber={pageNumber}
                      updatePageNumber={updatePageNumber}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

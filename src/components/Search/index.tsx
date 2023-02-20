import { TextField } from "@mui/material";

const Search = ({ setSearch, updatePageNumber }: any) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center md:w-1/2 mt-2 mb-4 sm:mt-4 sm:mb-8">
      <TextField
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        variant="outlined"
        className="w-full"
        color="success"
        type="text"
      />
    </div>
  );
};

export default Search;

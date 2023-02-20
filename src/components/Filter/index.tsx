import { Button, ButtonProps, styled } from "@mui/material";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#8BD046",
  backgroundColor: "#272727",
  "&:hover": {
    backgroundColor: "#272727",
  },
}));

const Filter = ({ filterState, updatePageNumber }: any) => {
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload();
  };

  const { gender, updateGender, status, updateStatus, species, updateSpecies } =
    filterState;
  return (
    <div className="flex flex-col justify-center items-center mt-2 mb-4 sm:mt-4 sm:mb-8">
      <ColorButton className="" onClick={clear} variant="text">
        Clear Filters
      </ColorButton>
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-around mt-4">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
          status={status}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
          species={species}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
          gender={gender}
        />
      </div>
    </div>
  );
};

export default Filter;

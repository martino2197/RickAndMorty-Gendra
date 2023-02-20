import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Gender = ({ gender, updateGender, updatePageNumber }: any) => {
  const genders = ["female", "male", "genderless", "unknown"];

  const handleChange = (event: SelectChangeEvent) => {
    updateGender(event.target.value);
    updatePageNumber(1);
  };

  return (
    <FormControl className="w-1/4">
      <InputLabel color="success" id="demo-simple-select-label">
        Gender
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        className="text-white"
        id="demo-simple-select"
        value={gender}
        onChange={handleChange}
        color="success"
      >
        {genders.map((items, index) => {
          return (
            <MenuItem key={index} value={items}>
              {items}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Gender;

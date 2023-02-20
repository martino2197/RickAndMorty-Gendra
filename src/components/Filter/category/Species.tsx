import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const SPECIES = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];
const Species = ({ species, updateSpecies, updatePageNumber }: any) => {
  const handleChange = (event: SelectChangeEvent) => {
    updateSpecies(event.target.value);
    updatePageNumber(1);
  };

  return (
    <FormControl className="w-1/4">
      <InputLabel color="success" id="demo-simple-select-label">
        Species
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        className="text-white"
        id="demo-simple-select"
        value={species}
        onChange={handleChange}
        color="success"
      >
        {SPECIES.map((items, index) => {
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

export default Species;

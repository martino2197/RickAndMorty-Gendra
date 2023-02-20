import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const STATUS = ["Alive", "Dead", "Unknown"];

const Status = ({ status, updateStatus, updatePageNumber }: any) => {
  const handleChange = (event: SelectChangeEvent) => {
    updateStatus(event.target.value);
    updatePageNumber(1);
  };

  return (
    <FormControl className="w-1/4">
      <InputLabel color="success" id="demo-simple-select-label">
        Status
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        className="text-white"
        id="demo-simple-select"
        value={status}
        onChange={handleChange}
        color="success"
      >
        {STATUS.map((items, index) => {
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

export default Status;

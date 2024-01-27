import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

import { useField } from "formik";
const SelectComponent = ({
  label,
  name,
  placeholder,
  menuItem,
  menuLabel,
  menuValue,
}: {
  label: string;
  name: string;
  placeholder?: string;
  menuItem: any[];
  menuLabel: string;
  menuValue: string;
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <FormControl fullWidth error={Boolean(meta.error) && meta.touched}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select label={label} {...field}>
        {menuItem?.map((item: any, index: number) => (
          <MenuItem key={index.toString()} value={item[menuValue]}>
            {item[menuLabel]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {Boolean(meta.error) && meta.touched && meta.error}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectComponent;

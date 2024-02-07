import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B7791F",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B7791F",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B7791F",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B7791F",
          },
        },
      },
    },
  },
});

export default function Selection() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 120, color: "#B7791F" }}>
        <FormControl fullWidth>
          <InputLabel sx={{ color: "#B7791F" }} id="demo-simple-select-label">
            Year
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{ color: "#B7791F" }}
          >
            <MenuItem value={1901}>1901</MenuItem>
            <MenuItem value={1902}>1902</MenuItem>
            <MenuItem value={1903}>1903</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="outlined">Check year</Button>
    </ThemeProvider>
  );
}

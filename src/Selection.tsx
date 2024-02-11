import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import getYear from "/src/apiRes.js";

const yearsArr = await getYear();
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
    <div className="flex flex-row gap-6 items-center">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: 140, color: "#B7791F" }}>
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
              {yearsArr.map((item: string) => (
                <MenuItem value={Number(item)}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" sx={{ color: "black", height: 40 }}>
          Check awards
        </Button>
      </ThemeProvider>
    </div>
  );
}

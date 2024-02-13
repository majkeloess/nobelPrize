import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { getYear, getData } from "/src/apiRes.js";
import YearContext from "./Context";

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
  const [data, setData] = useState(null);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleButtonClick = async () => {
    const res = await getData(age.toString());
    console.log(res);
    setData(res);
  };

  return (
    <YearContext.Provider value={data}>
      <div className="flex flex-row gap-6 items-center">
        <ThemeProvider theme={theme}>
          <Box sx={{ width: 140, color: "#B7791F" }}>
            <FormControl fullWidth>
              <InputLabel
                sx={{ color: "#B7791F" }}
                id="demo-simple-select-label"
              >
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
                  <MenuItem key={item} value={Number(item)}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            onClick={handleButtonClick}
            variant="contained"
            sx={{ color: "black", height: 40 }}
          >
            Check awards
          </Button>
        </ThemeProvider>
      </div>
    </YearContext.Provider>
  );
}

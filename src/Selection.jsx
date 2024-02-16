import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import YearContext from "./Context.jsx";
import { useNavigate } from "react-router-dom";

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
  const { age, setAge, years } = useContext(YearContext);
  const navigate = useNavigate();
  console.log(years);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleButtonClick = () => {
    navigate(`/prize/${age}`);
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
              {years &&
                years.map((item) => (
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
  );
}

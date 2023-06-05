import Home from "./Primary_components/Home";
import Options from "./Primary_components/Options";
import Contact from "./Primary_components/Contact";
import Final from "./Primary_components/Final";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Background from "./assets/background.jpg";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Home />
    </Box>
  );
}

export default App;

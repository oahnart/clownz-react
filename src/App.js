import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "./utils/constants/styles/theme";

import Routes from "./Routes";
// import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

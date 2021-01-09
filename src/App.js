import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { green } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import Armazenado from "./services/redux/store";
import Footer from "./components/common/Footer";
import { SnackbarProvider } from "notistack";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
    primary: {
      main: green[600],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});

function App() {
  return (
    <div>
      <Provider store={Armazenado}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <Routes />
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;

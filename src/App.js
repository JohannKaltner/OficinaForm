import React, { Component, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { blue, green, warning, indigo } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import { Armazenado } from "./services/redux/store";
import { Handle_Action } from "./services/redux/actions/action_types";
import ModalOficinaSelect from "./components/common/ModalSelectOficina";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
    primary: {
      main: green[700],
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
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

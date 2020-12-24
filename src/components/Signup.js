import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Login } from "../services/Api/Auth";
import LoginForm from "./Login/loginForm";
import Perfil from "./user/Perfil";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200,
  },
  grid: {
    width: 1000,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey["200"],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginBottom: theme.spacing(4),
    },
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  baseline: {
    alignSelf: "baseline",
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 0,
    },
  },
  inline: {
    display: "inline-block",
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  inlineRight: {
    width: "30%",
    textAlign: "right",
    marginLeft: 50,
    alignSelf: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
      textAlign: "center",
    },
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
});

class SignUp extends Component {
  componentDidMount() {
    const logged = localStorage.getItem("logado");
    console.log(logged);
  }
  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return <Perfil />;
  }
}

export default withStyles(styles)(SignUp);

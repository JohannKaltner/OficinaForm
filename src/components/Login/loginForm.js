import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, TextField } from "@material-ui/core";
import { Login } from "../../services/Api/Auth";
import SectionHeader from "../typo/SectionHeader";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(47 174 105)",
    overflow: "hidden",
    paddingTop: 60,
    padding: 20,
    paddingBottom: 150,
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

class LoginForm extends Component {
  state = {
    email: "",
    senha: "",
  };
  realizeLogin() {
    const credentials = {
      email: this.state.email,
      senha: this.state.senha,
    };
    Login(credentials);
  }

  render() {
    const Image = require("../../images/NearGarage.png");
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container justify='center'>
            <Grid
              spacing={10}
              alignItems='center'
              justify='center'
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <div className={classes.root}>
                  <Paper className={classes.paper}>
                    <img
                      alt='logo'
                      style={{
                        borderRadius: "50%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                      }}
                      width={150}
                      src={Image}
                    ></img>
                    <SectionHeader
                      title='Login'
                      subtitle='Insira suas Credenciais'
                    />
                    <div className={classes.itemContainer}>
                      <div className={classes.avatarContainer}>
                        <Avatar className={classes.avatar}>
                          <AccountCircleIcon />
                        </Avatar>
                      </div>
                      <div className={classes.baseline}>
                        <div className={classes.inline}>
                          <Typography
                            style={{ textTransform: "uppercase" }}
                            color='secondary'
                            gutterBottom
                          >
                            E-Mail
                          </Typography>
                          <TextField
                            id='email'
                            type='email'
                            value={this.state.email}
                            onChange={(e) =>
                              this.setState({
                                email: e.target.value,
                              })
                            }
                            fullWidth
                          />
                        </div>

                        <div className={classes.inline}>
                          <Typography
                            style={{ textTransform: "uppercase" }}
                            color='secondary'
                            gutterBottom
                          >
                            Senha
                          </Typography>
                          <TextField
                            id='senha'
                            type='password'
                            value={this.state.senha}
                            onChange={(e) =>
                              this.setState({
                                senha: e.target.value,
                              })
                            }
                            fullWidth
                          />
                        </div>
                      </div>
                      <div className={classes.inlineRight}>
                        <Button
                          onClick={() => this.realizeLogin()}
                          variant='outlined'
                          color='primary'
                        >
                          Realizar Login
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);

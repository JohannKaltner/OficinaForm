import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Topbar from "../Topbar";
import CardItem from "../cards/CardItem";
import SectionHeader from "../typo/SectionHeader";
import { Button, List, ListItem, Typography } from "@material-ui/core";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200,
  },
  grid: {
    width: 1000,
  },
});

class Perfil extends Component {
  Deslogar() {
    localStorage.setItem("user_id", null);
    localStorage.setItem("user_nome", null);
    localStorage.setItem("user_email", null);
    localStorage.setItem("logado", null);
    window.location.href = "login";
  }

  render() {
    const { classes } = this.props;
    const UserNome = localStorage.getItem("user_nome");
    const UserId = localStorage.getItem("user_id");

    return (
      <React.Fragment>
        <Topbar currentPath='/perfil' />
        <CssBaseline />
        <div className={classes.root}>
          <List>
            <ListItem>
              <Grid container justify='center'>
                <Grid
                  spacing={10}
                  alignItems='center'
                  justify='center'
                  container
                  className={classes.grid}
                >
                  <Grid item xs={12}>
                    <SectionHeader title={"Olá, " + UserNome} />
                    {/* <CardItem /> */}
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container justify='center'>
                <Grid
                  spacing={10}
                  alignItems='center'
                  justify='center'
                  container
                  className={classes.grid}
                >
                  <Grid item xs={12}>
                    <Button
                      variant='text'
                      color='warning'
                      onClick={() => this.Deslogar()}
                    >
                      <Typography>Deslogar</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Perfil);

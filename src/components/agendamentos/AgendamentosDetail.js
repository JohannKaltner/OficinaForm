import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Topbar from "../Topbar";
import CardItem from "../cards/CardItem";
import SectionHeader from "../typo/SectionHeader";
import { Button, List, ListItem, Typography } from "@material-ui/core";
import api from "../../services/Api";
import Snack from "../common/SnackBar";
import { Link } from "react-router-dom";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 50,
  },
  grid: {
    width: 1000,
  },
});

class OficinaDetail extends Component {
  state = {
    agendamento: [],
    hasLoaded: false,
  };

  Deslogar() {
    localStorage.setItem("user_id", null);
    localStorage.setItem("user_nome", null);
    localStorage.setItem("user_email", null);
    localStorage.setItem("logado", null);
    window.location.href = "login";
  }
  componentDidMount() {
     api
      .get("agendamentos/PorId/" + this.props.match.params.id)
      .then((response) => {
        const { agendamentos } = response.data;
        this.setState({
          agendamento: agendamentos,
          hasLoaded: true,
        });
        console.log("atual", response.data);
      });
  }

  render() {
    const props = this.props;
    const { agendamento, hasLoaded } = this.state;
    const { classes } = props;
    // const UserNome = localStorage.getItem("user_nome");
    // const UserId = localStorage.getItem("user_id");

    return (
      <React.Fragment>
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
                  {hasLoaded !== false ? (
                    <Grid item xs={12}>
                      <SectionHeader
                        title={"Olá, você recebeu um agendamento"}
                      />
                      <CardItem Agendamento={agendamento} />
                    </Grid>
                  ) : (
                    <div></div>
                  )}
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
                    <Button variant='text' color='warning'>
                      <Typography>
                        <Link style={{ color: "inherit" }} to='/'>
                          Voltar
                        </Link>
                      </Typography>
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

export default withStyles(styles)(OficinaDetail);

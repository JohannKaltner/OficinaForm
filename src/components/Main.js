import React, { useEffect, useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Topbar from "./Topbar";
import { useSelector } from "react-redux";
import Armazenado from "../services/redux/store";
import { HANDLE_ACTION } from "../services/redux/actions/action_types";
import ModalOficinaSelect from "./common/ModalSelectOficina";
import api from "../services/Api";
import CardItemNovo from "./cards/CardItemNovo";
import "./Main.css";
import {
  getAgendamentoPorSituacao,
  GetAgendamentos,
} from "../services/functions/requests";
import Smartphone from "./common/smartphone";
import { Slide, Snackbar } from "@material-ui/core";
const logo = require("../images/background.jpg");

const styles = (theme) => ({
  root: {
    height: "100vh",
    flexGrow: 1,
    // backgroundColor: "white",
    overflow: "hidden",
    // backgroundImage: `url(${logo}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    height: "auto",
  },
  inlining: {
    display: "inline-block",
    marginRight: 10,
  },
  buttonBar: {
    display: "flex",
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  noBorder: {
    borderBottomStyle: "hidden",
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },
});

function Main(props) {
  const { classes } = props;
  const [hasLoaded, setHasLoaded] = useState(false);
  const ShowModal =
    hasLoaded === true &&
    localStorage.getItem("id_oficina") === null &&
    localStorage.getItem("has_oficina") === 1; 
  const estado = useSelector((state) => state);
  const Agendamentos = estado.agendamentoState.Agendamentos;
  const background = require("../images/background.jpg");

  

  useEffect(() => {
    HasNewBooking(true);
    const interval = setInterval(() => HasNewBooking(true), 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);
   const HasNewBooking = async (isFirstLoad, SituacaoDiferente) => {
    try {
      if (localStorage.getItem("has_oficina") == 0) {
        return null;
      } else {
        const situacao = getSituacao(isFirstLoad, SituacaoDiferente);
        const id = localStorage.getItem("id_oficina");
        await getAgendamentoPorSituacao(id, situacao);
        setTimeout(() => {
          setHasLoaded(true);
          console.log(Agendamentos);
        }, 2000);
      }
    } catch {
      console.log("erro");
    }
  };
  const getSituacao = function (isFirstLoad, SituacaoDiferente) {
    if (isFirstLoad === true) {
    
      return "0";
    } else if (SituacaoDiferente) { 
      return SituacaoDiferente;
    }
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: "url(" + background + " )",
      }}
    >
      <CssBaseline />
      <Topbar />
      <div>
        <Grid
          spacing={4}
          alignItems='center'
          justify='center'
          container
          className={classes.grid}
        >
          <Grid container justify='center' style={{textAlign:'center',marginLeft:60}}>
            <Typography className={"MuiTypography--subheading"} variant={"h6"}>
              Tá com problemas?
              <br />
              Veio ao lugar certo!
              <br />
              {/* <Button size='large' variant='contained' color='primary'>
                Começar
              </Button> */}
            </Typography>
            {hasLoaded === false ? (
              <div></div>
            ) : (
              <Grid container item xs={12}>
                {[Agendamentos].map((agendamento, i) => {
                  return (
                    <Grid item xs={12} key={i} alignItems='center'>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            float: "right",
                            marginTop: 100,
                          }}
                        >
                          <Snackbar
                            style={{ backgroundColor: "white", marginTop: 50 }}
                            open={true}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            // onClose={handleClose}
                            // TransitionComponent={<Slide direction='up' />}
                            // message={
                            // <div className={classes.box} key={i}>

                            // <div style={{ marginTop: 30 }}></div>
                            // </div>
                            // }
                            // key={transition ? transition.name : ''}
                          >
                            <div
                              style={{
                                borderRadius: 10,
                                border: `1px solid lightgrey`,
                              }}
                            >
                              <CardItemNovo agendamento={agendamento} />
                            </div>
                          </Snackbar>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            )}

            {/* <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color='secondary'
                    gutterBottom
                  >
                    Minhas Oficinas
                  </Typography>
                  <Typography variant='body2' gutterBottom>
                    Gerencie suas Oficinas
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    component={Link}
                    to={{ pathname: "/painel" }}
                    color='primary'
                    variant='contained'
                    className={classes.actionButtom}
                  >
                    Entrar
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color='secondary'
                    gutterBottom
                  >
                    Meus Agendamentos
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    Gerenciar historico de agendamentos
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    component={Link}
                    to={{ pathname: "/agendamentos" }}
                    color='primary'
                    variant='contained'
                    className={classes.actionButtom}
                  >
                    Entrar
                  </Button>
                </div>
              </Paper>
            </Grid> */}
          </Grid>
          {/* <Grid container justify='flex-end' style={{ marginRight: 70 }}>
            <Paper>
              
            </Paper>
            <Smartphone />
          </Grid> */}
        </Grid>
      </div>
      <ModalOficinaSelect open={ShowModal} />
    </div>
  );
}

export default withRouter(withStyles(styles)(Main));

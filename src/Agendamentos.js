import React, { useEffect, useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Topbar from "./../Topbar";
import { useSelector } from "react-redux";
import Armazenado from "../../services/redux/store";
import { HANDLE_ACTION } from "../../services/redux/actions/action_types";
import ModalOficinaSelect from "../common/ModalSelectOficina";
import CardItemNovo from "../cards/CardItemNovo";
import api from "../../services/Api";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    // background: `url(${backgroundShape}) no-repeat`,
    // backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 150,
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

function Agendamentos(props) {
  const { classes } = props;
  const estado = useSelector((state) => state);
  const Agendamentos = estado.agendamentoState.Agendamentos;
  const [hasLoaded, setHasLoaded] = useState(false);
  const ShowModal = !hasLoaded && localStorage.getItem("id_oficina") === null;

  useEffect(() => {
    HasNewBooking(true);
    const interval = setInterval(() => HasNewBooking(1), 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const HasNewBooking = (isFirstLoad, SituacaoDiferente) => {
    try {
      const getSituacao = function () {
        if (isFirstLoad === true) {
          return "0";
        } else if (SituacaoDiferente) {
          return SituacaoDiferente;
        }
      };
      const situacao = getSituacao();
      const id = localStorage.getItem("id_oficina");
      // api
      //   .post("/agendamentos/SearchAgendamento/", {
      //     id: id,
      //     situacao: situacao,
      //   })
      //   .then((response) => {
      //     const Arranjo = [];
      //     const { agendamento, quantidade } = response.data;
      //     for (let i = 0; i < quantidade; i++) {
      //       const Data = agendamento[i];
      //       Arranjo.push(Data);
      //       console.log(Arranjo);
      //     }
      //     setAgendamentos(Arranjo);
      //   })
      //   .then(() => {
      //     setTimeout(() => {
      //       setHasLoaded(true);
      //       console.log(Agendamentos);
      //     }, 2000);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } catch {
      console.log("Erro");
    }
  };

  const HasActiveBooking = () => {};

  // const GetNewBookings = () => {
  //   GetAgendamentos()
  // }

  // let id_oficina = localStorage.getItem("id_oficina");
  // api
  //   .get("/agendamentos/PorOficina/" + id_oficina + "?page=" + Page)
  //   .then(async (response) => {
  //     const { agendamento, quantidade } = response.data;
  //     console.log(
  //       "Dados de retorno, quantidade de dados: " + agendamento.length
  //     );
  // for (let i = 0; i < agendamento.length; i++) {
  // const Data = agendamento[1];
  // console.log("Gravando o " + 1 + " ", Data);
  // Agendamentos.push(Data);
  //  Armazenado.dispatch({
  //   type: Handle_Get_Bookings,
  //   Agendamentos: Data,
  //   ShowNewAgendamento: true,
  //   Quantidade: quantidade,
  // });
  //  }
  //   console.log(Agendamentos);
  //   setHasLoaded(true);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // }
  // let id = localStorage.getItem("id_oficina");
  // if (id === null) {

  //}
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar />
      <div>
        <Grid container justify='center'>
          <Grid
            spacing={4}
            alignItems='center'
            justify='center'
            container
            className={classes.grid}
          >
            {estado.agendamentoState.ShowNewAgendamento === false ? (
              <div></div>
            ) : (
              <Grid container item xs={12}>
                {Agendamentos.map((agendamento, i) => {
                  return (
                    <Grid item xs={12} key={i} alignItems='center'>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div className={classes.box} key={i}>
                          <CardItemNovo agendamento={agendamento} />
                          <div style={{ marginTop: 30 }}></div>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            )}

            <Grid item xs={12} md={6}>
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
                    color='primary'
                    variant='contained'
                    className={classes.actionButtom}
                  >
                    Entrar
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <ModalOficinaSelect open={ShowModal} />
    </div>
  );
}

export default withRouter(withStyles(styles)(Agendamentos));

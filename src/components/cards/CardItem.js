import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import DescriptionIcon from "@material-ui/icons/Description";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import SectionHeader from "../typo/SectionHeader";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LoopIcon from "@material-ui/icons/Loop";
import api from "../../services/Api";
import Snack from "../common/SnackBar";
import Alert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(5),
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
  inline2: {
    // display: "inline-block",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
});

class CardItem extends Component {
  state = {
    open: false,
  };
  getSteps() {
    return [
      "Aguardando Confirmação",
      "Em Andamento",
      "Pronto para Entegar",
      "Entregue",
    ];
  }

  getLabels(situacao) {
    switch (situacao) {
      case 0:
        return "Confirmar Agendamento";
      case 1:
        return "Finalizar Agendamento";
      case 2:
        return "Realizar Entrega";
      case 3:
        return "Confirmar Entrega";
      case 4:
        return "Agendamento Finalizado.";
      default:
        return "Aguarde...";
    }
  }

  render() {
    const steps = this.getSteps();
    const { classes } = this.props;
    const { Agendamento } = this.props;

    const { criadoEm, preco, id, atualizadoEm, situacao } = Agendamento[0];

    let isOpen = false;
    const Label = this.getLabels(situacao);

    const {
      primeiro_nome_usuario,
      rua_usuario,
      bairro_usuario,
      numero_usuario,
      telefone_usuario,
    } = Agendamento[0].usuario;

    const {
      modelo_veiculo,
      marca_veiculo,
      ano_veiculo,
      tipo_combustivel,
    } = Agendamento[0].veiculo;
 
    const HandleAction = () => {
      const idAgendamento = id;
      const NovaSituacao = situacao + 1;
      try {
        api
          .patch("agendamentos/AlteraStatus", {
            situacao: NovaSituacao,
            id: idAgendamento,
          })
          .then(() => {
            this.setState({
              isOpen: true,
            });
          })
          .then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch {
        alert("Não foi possivel atualizar o Agendamento.");
      }
    };

    return (
      <div className={classes.root}>
        {/* Section de Stepper */}
        <MuiAlert
          elevation={6}
          variant='filled'
          style={{ display: situacao === 4 ? "flex" : "none" }}
        >
          Esse Agendamento já foi finalizado!
        </MuiAlert>

        <Paper className={classes.paper} elevation={3}>
          <div style={{ marginTop: 30, marginBottom: 30 }}>
            <div className={classes.itemContainer}>
              <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar}>
                  <LoopIcon />
                </Avatar>
              </div>
              <div className={classes.baseline}>
                <div className={classes.inline2}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color='secondary'
                    gutterBottom
                  >
                    Status do Agendamento
                  </Typography>
                  <Stepper
                    activeStep={situacao}
                    alternativeLabel
                    style={{ width: "140%" }}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div>
              </div>
            </div>
            <div
              style={{
                float: "right",
              }}
            >
              <Button
                color='primary'
                disabled={situacao === 4}
                onClick={() => HandleAction()}
                variant='contained'
              >
                {Label}
              </Button>
            </div>
          </div>
        </Paper>

        {/* Section de Usuario */}
        <Paper className={classes.paper} elevation={3}>
          <div className={classes.itemContainer}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar}>
                <AccountBoxIcon />
              </Avatar>
            </div>
            <div className={classes.baseline}>
              <div className={classes.inline}>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color='secondary'
                  gutterBottom
                >
                  Nome do Cliente
                </Typography>
                <Typography variant='h6' gutterBottom>
                  <b>{primeiro_nome_usuario}</b>
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color='secondary'
                  gutterBottom
                >
                  Agendamento Criado em
                </Typography>
                <Typography variant='h6' gutterBottom>
                  <b>{criadoEm}</b>
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color='secondary'
                  gutterBottom
                >
                  Preço
                </Typography>
                <Typography variant='h6' gutterBottom>
                  <b>R$ {parseFloat(preco, 10).toFixed(2)}</b>
                </Typography>
              </div>
            </div>
          </div>
        </Paper>
        {/* Section de Veículo */}
        <Paper className={classes.paper} elevation={3}>
          <div className={classes.itemContainer}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar}>
                <DriveEtaIcon />
              </Avatar>
            </div>
            <div className={classes.baseline}>
              <div className={classes.inline}>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color='secondary'
                  gutterBottom
                >
                  Marca e Modelo do Veículo
                </Typography>
                <Typography variant='h6' gutterBottom>
                  <b>{marca_veiculo + " " + modelo_veiculo}</b>
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color='secondary'
                  gutterBottom
                >
                  Ano do Veículo
                </Typography>
                <Typography variant='h6' gutterBottom>
                  <b>{ano_veiculo}</b>
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color='secondary'
                  gutterBottom
                >
                  Tanque do Veículo
                </Typography>
                <Typography variant='h6' gutterBottom>
                  <b>{tipo_combustivel}</b>
                </Typography>
              </div>
            </div>
          </div>
        </Paper>

        <Snack open={isOpen} />
      </div>
    );
  }
}

export default withStyles(styles)(CardItem);

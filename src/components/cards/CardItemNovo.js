import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import DescriptionIcon from "@material-ui/icons/Description";
import {
  Button,
  Divider,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import Loading from "../common/Loading";
import { Link } from "react-router-dom";
import { green } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    width: 400,
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`,
    // [theme.breakpoints.down("sm")]: {
    //   width: "calc(100% - 20px)",
    // },
  },
  loadingState: {
    opacity: 0.05,
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
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
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
    height: 36,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    padding: theme.spacing(2),
  },
  loanAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  interestAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
  inlining: {
    display: "inline-block",
    marginRight: 10,
  },
  buttonBar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  noBorder: {
    borderBottomStyle: "hidden",
  },
  mainBadge: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
});

class CardItemNovo extends Component {
  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    data: [],
  };
  render() {
    const { classes } = this.props;
    const { agendamento } = this.props; 
    return (
      <div className={classes.root}>
        <div className={classes.paper} style={{ position: "relative" }}>
          {/* <Loading loading={loading} /> */}
          <div>
            <Typography variant='subtitle1' gutterBottom></Typography>
            <div className={classes.mainBadge}>
              <AnnouncementIcon
                style={{ fontSize: 72 }}
                fontSize={"large"}
                // color={green[500]}
              />
              <Typography variant='h5' gutterBottom>
                Novo Agendamento
              </Typography>
            </div>
            <div className={classes.buttonBar}>
              <Button
                fullWidth
                to={{ pathname: "/painel", search: `?type=save` }}
                component={Link}
                variant='outlined'
                className={classes.actionButtom}
              >
                Cancelar
              </Button>
              <Button
                fullWidth
                to={{
                  pathname: "/OficinaDetail/" + agendamento.id,
                }}
                component={Link}
                color='primary'
                variant='contained'
                className={classes.actionButtom}
              >
                Exibir
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CardItemNovo);

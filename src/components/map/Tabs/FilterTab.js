import React, { useState } from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import ExploreIcon from "@material-ui/icons/Explore";
import SearchIcon from "@material-ui/icons/Search";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import api from '../../../services/Api/'
import { SendToStore } from "../../../services/helpers";
import { Handle_GET_Oficinas } from "../../../services/redux/actions/action_types";
import Armazenado from "../../../services/redux/store";
const styles = (muiBaseTheme) => ({
  card: {
    height: "100",
    maxWidth: 600,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 2}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
});

function FilterTab({ classes }) {
  const [Nome, setNome] = useState("");
  const [Rua, setRua] = useState("");
  const [Numero, setNumero] = useState("");
  const [Cidade, setCidade] = useState("");
  const [Bairro, setBairro] = useState("");
  const [Estado, setEstado] = useState("");
  const [Cep, setCep] = useState("");

  const Filter = () => {
    const body = {
      nome: Nome,
      rua: Rua,
      numero: Numero,
      bairro: Bairro,
      cidade: Cidade,
      estado:Estado,
      cep: Cep,
    }
    api.post('oficinas/PorFiltroAvancado', body )
    .then(response => {
        console.log(response)
        const Arrangment =  response.data.oficinas;
        Armazenado.dispatch({type:Handle_GET_Oficinas , Data: Arrangment})
 
    }).catch(err => {
      console.log(err)
  
    })
  };

  return (
    <div className="App" style={{ margin: 20 }}>
      <Card className={classes.card}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SearchIcon
              style={{
                color: "rgb(47 174 105)",
                paddingRight: 10,
              }}
            />
            <InputLabel
              style={{
                paddingTop: 3,
                fontSize: 20,
                marginRight: 10,
              }}
            >
              Filtros
            </InputLabel>
            <Divider style={{margin: '20px 0 0 20px'}} light />
          </AccordionSummary>

          <div style={{ marginTop: 10 }}>
            <CardContent className={classes.content}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="standard-required"
                    onChange={(event) => setNome(event.target.value)}
                    value={Nome}
                    fullWidth
                    label="Nome"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="standard-required"
                    onChange={(event) => setRua(event.target.value)}
                    value={Rua}
                    fullWidth
                    label="Rua"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="standard-required"
                    onChange={(event) => setNumero(event.target.value)}
                    value={Numero}
                    fullWidth
                    label="Numero"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="standard-required"
                    onChange={(event) => setBairro(event.target.value)}
                    value={Bairro}
                    fullWidth
                    label="Bairro"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="standard-required"
                    onChange={(event) => setCidade(event.target.value)}
                    value={Cidade}
                    fullWidth
                    label="Cidade"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="standard-required"
                    onChange={(event) => setCep(event.target.value)}
                    value={Cep}
                    fullWidth
                    label="Cep"
                    defaultValue=""
                  />
                </Grid>
              </Grid>
              <Divider className={classes.divider} light />
              <Button
                variant="contained"
                style={{ float: "right", marginBottom: 10 }}
                color="primary"
                onClick={() => Filter()}
              >
                Consultar
              </Button>
            </CardContent>
          </div>
        </Accordion>
      </Card>
    </div>
  );
}
export default withStyles(styles)(FilterTab);

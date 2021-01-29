import React, { Component, useEffect, useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Topbar from "../Topbar";
import { Paper, Button, DialogActions, Divider, Grow, Slide} from "@material-ui/core";
import AccountInfo from "./submenus/accountInfo";
import { useSelector } from "react-redux";
import Fade from "@material-ui/core/Fade";
import MyVehicles from "./submenus/myVehicles";
import PaymentMethods from "./submenus/paymentMethods";
import Armazenado from '../../services/redux/store/'
import { Handle_Menu_Click } from "../../services/redux/actions/action_types";
import History from "./submenus/history";

function Perfil() {
  const estado = useSelector((state) => state);
  const [slide, setSlide] = useState(true);


  const MenuTopic = ({children}) => {
      return (
        <>
        {children}
        <DialogActions>
        <Divider/>
        <Button onClick={()=> Armazenado.dispatch({type:Handle_Menu_Click, visao: 'inicial'})} variant='contained' color='primary'> Voltar </Button>
        </DialogActions>
        </>
      )
  } 

  const Apresentar = (props) => {
    let apresentar;

    console.log(estado.clickState.visao);
    switch (estado.clickState.visao) {
      case "inicial":
        apresentar = <AccountInfo />
        break;
       case "historicoDeAgendamentos":
         apresentar = (
           <MenuTopic>
           <History />
           </MenuTopic>           
         );
         break;
      case "metodosDePagamento":
        apresentar = (
          <MenuTopic>
          <PaymentMethods />
          </MenuTopic>           
        );
        break;
      case "meusVeiculos":
       apresentar = (
          <MenuTopic>
          <MyVehicles/>
          </MenuTopic>           
        ); 
        break;
    }
    return(
       <Grow  in={true} mountOnEnter unmountOnExit {...props}>
       <div>{apresentar}</div>
       </Grow>);
  };

  return (
    <React.Fragment>
      <Topbar currentPath="/perfil" />
      <CssBaseline />
      <div
        style={{
          flexGrow: 1,
          overflow: "hidden",
          backgroundPosition: "0 400px",
          marginTop: 20,
          padding: 20,
          paddingBottom: 200,
        }}
      >
        <Grid container justify="center">
          <Paper style={{ width: 600 }} elevation={3}>
              <div style={{ maxWidth: 560 }}>
                <Apresentar />
              </div>
          </Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Perfil;

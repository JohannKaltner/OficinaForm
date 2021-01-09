import React from "react";
import {
  Avatar,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Slide,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListSubheader from "@material-ui/core/ListSubheader";
import HistoryIcon from "@material-ui/icons/History";
import PaymentIcon from "@material-ui/icons/Payment";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import Armazenado from "../../../services/redux/store/";
import { Handle_Menu_Click } from "../../../services/redux/actions/action_types";

export default function AccountInfo() {
  const UserNome = localStorage.getItem("user_nome");
  const UserId = localStorage.getItem("user_id");
  const profile = require("../../../images/profile.png");

  const Deslogar = () => {
    localStorage.setItem("user_id", null);
    localStorage.setItem("user_nome", null);
    localStorage.setItem("user_email", null);
    localStorage.setItem("logado", false);
    window.location.href = "login";
  };
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={localStorage.getItem("user_nome")} src={profile} />
        </ListItemAvatar>
        <ListItemText primary={"Olá, " + UserNome} />
      </ListItem>
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        style={{ marginTop: 20 }}
      >
        Opções
      </ListSubheader>
      <Divider />
      <ListItem
        button
        onClick={() =>
          Armazenado.dispatch({
            type: Handle_Menu_Click,
            visao: "meusVeiculos",
          })
        }
      >
        <ListItemIcon>
          <DirectionsCarIcon style={{ color: "#2fae69" }} />
        </ListItemIcon>
        <ListItemText primary="Meus Veículos" />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() =>
          Armazenado.dispatch({
            type: Handle_Menu_Click,
            visao: "historicoDePagamento",
          })
        }
      >
        <ListItemIcon>
          <HistoryIcon style={{ color: "#2fae69" }} />
        </ListItemIcon>
        <ListItemText primary="Histórico de Agendamentos" />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() =>
          Armazenado.dispatch({
            type: Handle_Menu_Click,
            visao: "metodosDePagamento",
          })
        }
      >
        <ListItemIcon>
          <PaymentIcon style={{ color: "#2fae69" }} />
        </ListItemIcon>
        <ListItemText primary="Métodos de Pagamento" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => Deslogar()}>
        <ListItemIcon>
          <ExitToAppIcon style={{ color: "#ff0000 " }} />
        </ListItemIcon>
        <ListItemText primary="Sair" />
      </ListItem>
    </List>
  );
}

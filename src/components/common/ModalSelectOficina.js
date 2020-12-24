import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector } from "react-redux";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  LinearProgress,
} from "@material-ui/core";
import { fetchOficinaPorId } from "../../services/functions/requests";
import { Armazenado } from "../../services/redux/store";
import { HANDLE_ACTION } from "../../services/redux/actions/action_types";

export default function ModalOficinaSelect(props) {
  // const estado = useSelector((state) => state);

  useEffect(() => {
    checkIdInStorage();
  }, []);

  const { open } = props;

  const checkIdInStorage = () => {
    let id_usuario = localStorage.getItem("user_id");
    console.log("id já gravado:", id_usuario);
    setTimeout(() => {
      fetchOficinaPorId(id_usuario);
    }, 4000);
  };

  return (
    <div>
      <Dialog
        maxWidth={"md"}
        fullWidth
        open={open}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Olá, {localStorage.getItem("user_nome")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aguarde enquanto verificamos sua oficina!
          </DialogContentText>
          <DialogActions></DialogActions>
          <LinearProgress color='primary' />
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

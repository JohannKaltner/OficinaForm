import React from "react";
import Armazenado from "../redux/store";
import api from "./index";
import { Redirect, Route } from "react-router";
import { createBrowserHistory } from "history";

export function Login(credentials) {
  api
    .post(
      "usuarios/login",
      {
        email: credentials.email,
        senha: credentials.senha,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response);
      localStorage.setItem("user_id", response.data.usuario.id);
      localStorage.setItem("user_nome", response.data.usuario.primeiro_nome);
      localStorage.setItem("user_email", response.data.usuario.email);
      localStorage.setItem("has_oficina", response.data.usuario.hasOficina);
      localStorage.setItem("logado", true);
      window.location.href = "painel";
    })
    .catch((err) => {
      console.log(err);
      //   window.location.href = "dashboard";
    });
}

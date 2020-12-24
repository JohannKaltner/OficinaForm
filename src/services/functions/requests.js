import api from "../Api";
import { Handle_Get_Bookings } from "../redux/actions/action_types";
import { Armazenado } from "../redux/store";

export function GetAgendamentos(id_oficina, Page) {
  // let id_oficina = localStorage.getItem("id_oficina");
  api
    .get("/agendamentos/PorOficina/" + id_oficina + "?page=" + Page)
    .then((response) => {
      const { agendamento, quantidade } = response.data;
      console.log("Dados de retorno, quantidade de dados: " + quantidade);
      const Arranjo = [];
      for (let i = 0; i < agendamento.length; i++) {
        const Data = agendamento[i];
        console.log("Gravando o " + i + " ", Data);
        Arranjo.push(Data);
      }
      return Arranjo;
      // Armazenado.dispatch({
      //   type: Handle_Get_Bookings,
      //   Agendamentos: Arranjo,
      //   ShowNewAgendamento: true,
      //   Quantidade: quantidade,
      // });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchOficinaPorId(id) {
  api
    .get("/oficinas/PorIdUsuario/" + id)
    .then((response) => {
      let Arranjo = response.data.Oficina.id;
      localStorage.setItem("id_oficina", Arranjo);
    })
    .catch((err) => {
      console.log(err);
    });
}

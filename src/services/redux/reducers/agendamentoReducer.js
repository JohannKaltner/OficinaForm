import { Handle_Get_Bookings } from "../actions/action_types";

const initialState = {
  Agendamentos: [],
  Quantidade: 2,
  ShowNewAgendamento: true,
};

export const agendamentoReducer = (state = initialState, action) => {
  switch (action) {
    case Handle_Get_Bookings:
      const response = {
        atualizadoEm: action.atualizadoEm,
        criadoEm: action.criadoEm,
        id: action.id,
        id_oficina: action.id_oficina,
        id_usuario: action.id_usuario,
        id_veiculo: action.id_veiculo,
        obs: action.obs,
        prazo: action.prazo,
        preco: action.preco,
      };
      console.log(response, "opa");
      return {
        ...state,
        Agendamentos: response,
        Quantidade: action.Quantidade,
        ShowNewAgendamento: !state.ShowNewAgendamento,
      };

    default:
      return state;
  }
};

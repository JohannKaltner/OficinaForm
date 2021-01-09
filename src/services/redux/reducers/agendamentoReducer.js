import { Handle_GET_Bookings } from "../actions/action_types";

const initialState = {
  Agendamentos: [],
  Quantidade: 2,
  ShowNewAgendamento: true,
};

export const agendamentoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Handle_GET_Bookings: 
      return {
        ...state,
        Agendamentos: action.Agendamentos,
        Quantidade: action.Quantidade,
        ShowNewAgendamento: !state.ShowNewAgendamento,
      };

    default:
      return state;
  }
};

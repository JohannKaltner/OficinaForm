import {
  Handle_User_Data,
  Handle_Select_Oficina,
  HANDLE_ACTION,
} from "../actions/action_types";

const initialState = {
  UserId: "",
  UserName: "",
  UserEmail: "",
  Logado: false,
  Oficina: [],

  //Modais
  ActionModal: true,
  Message: "",
  IsValidation: "",
};

export const clickReducer = (state = initialState, action = {}) => {
  switch (action) {
    case Handle_User_Data:
      return {
        ...state,
        UserId: action.id,
        UserEmail: action.email,
        Logado: true,
      };

    case Handle_Select_Oficina:
      return {
        ...state,
        Oficina: action.Oficina,
      };
    case HANDLE_ACTION:
      return {
        ...state,
        ActionModal: action.ActionModal,
        Message: action.Message,
        IsValidation: action.IsValidation,
      };
    default:
      return state;
  }
};

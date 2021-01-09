import {
  Handle_User_Data,
  Handle_Select_Oficina,
  Handle_Pagination,
  Handle_Menu_Click,
  HANDLE_ACTION,

} from "../actions/action_types";

const INITIAL_STATE = {
  UserId: "",
  UserName: "",
  UserEmail: "",
  Logado: false,
  Oficina: [],

  //Modais
  ActionModal: true,
  Message: "",
  IsValidation: "",

  //Pagination
  Limit: 10,
  Page: 1,
  PageCount: 0,

  //Perfil Handler
  visao:'inicial'

  
};

export const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Handle_Menu_Click:
      return {
        ...state,
        visao: action.visao
      }
    case Handle_Pagination:
      return{
        ...state,
        Limit: action.Limit,
        Page: action.Page,
        PageCount: Math.ceil(action.Quantidade/ 5 ),
      }
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
